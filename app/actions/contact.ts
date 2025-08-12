"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  // フォームデータを取得
  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // バリデーション
  if (!name || !email || !message) {
    return {
      success: false,
      message: "必須項目を入力してください。",
    }
  }

  // メールアドレスの形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "正しいメールアドレスを入力してください。",
    }
  }

  try {
    // 受信用メールアドレス（環境変数から取得）
    const contactEmail = process.env.CONTACT_EMAIL || "shuzo.yajima@gmail.com"
    const resendApiKey = process.env.RESEND_API_KEY

    // API keyが設定されていない場合の処理
    if (!resendApiKey) {
      // 開発環境では console.log でシミュレート
      console.log("=== お問い合わせ受信 ===")
      console.log("名前:", name)
      console.log("会社名:", company || "（未入力）")
      console.log("メールアドレス:", email)
      console.log("内容:", message)
      console.log("受信先:", contactEmail)
      console.log("送信日時:", new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }))
      console.log("========================")

      return {
        success: true,
        message: "お問い合わせを受け付けました。（開発モード）",
      }
    }

    // Resendを動的にインポート
    const { Resend } = await import("resend")
    const resend = new Resend(resendApiKey)

    // メール送信
    await resend.emails.send({
      from: "info@yagi-llc.com",
      to: contactEmail,
      subject: `【ヤギ合同会社】お問い合わせ - ${name}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            お問い合わせを受信しました
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>会社名:</strong> ${company || "（未入力）"}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>このメールは ヤギ合同会社 のWebサイトから送信されました。</p>
            <p>送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
          </div>
        </div>
      `,
    })

    // 送信者への自動返信メール
    await resend.emails.send({
      from: "info@yagi-llc.com",
      to: email,
      subject: "【ヤギ合同会社】お問い合わせを受け付けました",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p>この度は、ヤギ合同会社にお問い合わせいただき、誠にありがとうございます。</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">受信内容の確認</h3>
            <p><strong>お名前:</strong> ${name} 様</p>
            <p><strong>会社名:</strong> ${company || "（未入力）"}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <div style="margin-top: 15px;">
              <strong>お問い合わせ内容:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 5px;">
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>
          </div>

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">今後の流れ</h3>
            <p>お問い合わせの内容は、順次確認させていただきます。<br>ご返信させていただく場合、返信までにお時間を頂戴することがございます。<br>あらかじめご了承ください。</p>
            <p>※ご意見・情報のご提供のみの内容に関しましては、このメールにて受付とさせていただき、弊社サービスの向上に役立たせていただきます。</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <h3 style="color: #333;">ヤギ合同会社</h3>
            <p style="color: #6b7280; margin: 5px 0;">〒150-0041 東京都渋谷区神南一丁目１１‐４ ＦＰＧリンクス神南５階</p>
            <p style="color: #6b7280; margin: 5px 0;">Email: info@yagi-llc.com</p>
          </div>

          <div style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>※このメールは自動送信されています。このメールに返信いただいても対応できませんので、ご了承ください。</p>
            <p>送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message: "お問い合わせを受け付けました。",
    }
  } catch (error) {
    console.error("フォーム送信エラー:", error)
    return {
      success: false,
      message: "送信中にエラーが発生しました。再度お試しください。",
    }
  }
}
