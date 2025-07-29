"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white">
      <CardContent className="p-8">
        <form action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <Input name="name" placeholder="山田太郎" className="border-gray-300" required disabled={isPending} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">会社名</label>
              <Input name="company" placeholder="株式会社サンプル" className="border-gray-300" disabled={isPending} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="border-gray-300"
              required
              disabled={isPending}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="message"
              placeholder="お問い合わせ内容をご記入ください"
              className="border-gray-300 min-h-[120px]"
              required
              disabled={isPending}
            />
          </div>

          {state && (
            <div
              className={`p-4 rounded-lg text-center ${
                state.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {state.message}
            </div>
          )}

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3" disabled={isPending}>
            {isPending ? (
              <>
                送信中...
                <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              </>
            ) : (
              <>
                送信する
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
