"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Globe,
  Lightbulb,
  ArrowRight,
  MapPin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
  Target,
  Palette,
  Code,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="font-bold text-xl text-gray-800">ヤギ合同会社</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              事業内容
            </Link>
            <Link href="#case-study" className="text-gray-600 hover:text-blue-600 transition-colors">
              事例
            </Link>
            <Link href="#company" className="text-gray-600 hover:text-blue-600 transition-colors">
              企業情報
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">インターネットでビジネス支援</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                デジタルで繋がる
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  未来を創造
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                送客支援、Web制作、インターネットサービスの企画・開発を通じて、
                お客様のビジネス成長をサポートします。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                サービスを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 bg-transparent">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">事業概要</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              インターネットを活用した3つの主要サービスで、お客様のビジネス成長を多角的にサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">送客支援</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  コンテンツマーケティングやアフィリエイトにより、潜在顧客を効果的に送客
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Web制作</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  お客様のビジネスに最適化された、美しく機能的なWebサイトを制作
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">サービス企画・開発</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  革新的なインターネットサービスの企画から開発まで一貫してサポート
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-20">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-blue-500" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">送客支援</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  企業や商品の魅力を最大限に引き出し、コンテンツマーケティングやアフィリエイトを駆使して潜在顧客を送客いたします。
                  データ分析に基づいた戦略的なアプローチで、質の高いリードを獲得します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">コンテンツマーケティング戦略立案</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">アフィリエイトネットワーク構築</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">データ分析・効果測定</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-24 w-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-blue-700 font-semibold">効果的な送客戦略</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Palette className="h-24 w-24 text-green-500 mx-auto mb-4" />
                  <p className="text-green-700 font-semibold">美しいWebデザイン</p>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Web制作</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  お客様のビジネス目標に合わせた、美しく機能的なWebサイトを制作いたします。
                  レスポンシブデザインとSEO対策を標準装備し、成果につながるサイトを提供します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">レスポンシブWebデザイン</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">SEO対策・パフォーマンス最適化</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">CMS導入・運用サポート</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Code className="h-8 w-8 text-purple-500" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">サービス企画・開発</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  革新的なインターネットサービスの企画から開発まで、一貫してサポートいたします。
                  最新技術を活用し、ユーザーに価値を提供するサービスを創造します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">サービス企画・要件定義</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">システム設計・開発</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">運用・保守サポート</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Code className="h-24 w-24 text-purple-500 mx-auto mb-4" />
                  <p className="text-purple-700 font-semibold">革新的なサービス開発</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">事例紹介</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">お客様の事例をご紹介します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Badge className="bg-blue-100 text-blue-700 w-fit mx-auto mb-4">送客支援事例</Badge>
                <CardTitle className="text-xl text-gray-800">K会計事務所様（東京都）</CardTitle>
                <CardDescription className="text-gray-600">個人事業主の節税に強みを持つ会計事務所</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  「お客様に資金増加のメリットを最大限とってもらう」をコンセプトに、「節税効果 ＞ 税理士報酬」となる方限定のサービスを全国展開。
                  弊社では、エンドユーザーの利益になる情報を前面に押し出すコンテンツを制作・展開することにより、質の高いリードへのリーチと送客をサポートいたします。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Badge className="bg-gray-100 text-gray-600 w-fit mx-auto mb-4">事例準備中</Badge>
                <CardTitle className="text-xl text-gray-500">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center text-sm">
                  新しい導入事例を準備中です。
                  <br />
                  近日公開予定です。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Badge className="bg-gray-100 text-gray-600 w-fit mx-auto mb-4">事例準備中</Badge>
                <CardTitle className="text-xl text-gray-500">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center text-sm">
                  新しい導入事例を準備中です。
                  <br />
                  近日公開予定です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section id="company" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">企業情報</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ヤギ合同会社の基本情報とアクセス方法をご案内します。</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <span>会社概要</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">会社名</h4>
                  <p className="text-gray-600">ヤギ合同会社</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">所在地</h4>
                  <p className="text-gray-600">
                    〒150-0041
                    <br />
                    東京都渋谷区神南一丁目１１‐４
                    <br />
                    ＦＰＧリンクス神南５階
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">事業内容</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 送客支援</li>
                    <li>• Web制作</li>
                    <li>• インターネットサービスの企画・開発</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>アクセスマップ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0267842842847!2d139.69847831525395!3d35.66192998019625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8b8b7b5b5%3A0x7c5b9b8b8b8b8b8b!2z44CSMTUwLTAwNDEg5p2x5Lqs6YO95riL6LC35Yy656We5Y2X77yR5LiB55uu77yR77yR4oiS77yU!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>最寄り駅：</strong>JR渋谷駅 徒歩5分
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>アクセス：</strong>ハチ公口より神南方面へ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SNS Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">SNS・お問い合わせ</h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                <Twitter className="h-6 w-6 text-blue-600" />
              </Link>
              <Link href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                <Facebook className="h-6 w-6 text-blue-600" />
              </Link>
              <Link href="#" className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                <Instagram className="h-6 w-6 text-pink-600" />
              </Link>
              <Link
                href="mailto:info@yagi-llc.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Mail className="h-6 w-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">お問い合わせ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              サービスに関するご質問やご相談は、お気軽にお問い合わせください。
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="font-bold text-xl">ヤギ合同会社</span>
              </div>
              <p className="text-gray-300 text-sm">
                インターネットを活用したサービスで、
                <br />
                お客様のビジネス成長をサポートします。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    送客支援
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web制作
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    サービス企画・開発
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">企業情報</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#company" className="hover:text-white transition-colors">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ヤギ合同会社. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
