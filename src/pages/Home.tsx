import { Link } from "react-router-dom";
import {
  TrendingUp, RefreshCw, PieChart, Brain,
  CreditCard, FolderOpen, GitBranch, PlayCircle,
  ArrowUpRight, ArrowDownRight, BarChart3, Users,
  BookOpen, Target, ChevronRight, Sparkles,
} from "lucide-react";
import {
  siteConfig, homeFeatures, marketStats, dailyReviewHighlights,
  knowledgeCardPreview, casePreview, philosophySummary,
} from "../data/site";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  RefreshCw: <RefreshCw className="h-6 w-6" />,
  PieChart: <PieChart className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  CreditCard: <CreditCard className="h-6 w-6" />,
  FolderOpen: <FolderOpen className="h-6 w-6" />,
  GitBranch: <GitBranch className="h-6 w-6" />,
  PlayCircle: <PlayCircle className="h-6 w-6" />,
};

export function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5" />
              基于威廉·欧奈尔 CAN SLIM 体系
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {siteConfig.subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/philosophy"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-100"
              >
                开始学习体系
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/simulation"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <PlayCircle className="h-4 w-4" />
                进入模拟演练
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 实时行情面板 ===== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-stretch divide-x divide-slate-200 overflow-x-auto px-2">
          {marketStats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-1 flex-col items-center px-4 py-4">
              <span className="text-xs font-medium text-slate-500">{stat.label}</span>
              <span className="mt-1 text-lg font-bold text-slate-900">{stat.value}</span>
              <span
                className={`mt-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${
                  stat.up ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CAN SLIM 概览 ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">CAN SLIM 选股体系</h2>
            <p className="mt-3 text-slate-500">
              七维度框架，筛选具备持续上涨潜力的成长股
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {philosophySummary.items.map((item) => (
              <div
                key={item.letter}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-slate-300"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white">
                  {item.letter}
                </div>
                <h3 className="font-semibold text-slate-900">{item.word}</h3>
                <p className="mt-1.5 text-sm leading-snug text-slate-500">{item.meaning}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
            >
              查看完整解读 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 功能模块网格 ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">投研工具栈</h2>
            <p className="mt-3 text-slate-500">
              覆盖从理念到实战的完整学习链路
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeFeatures.map((feat) => (
              <Link
                key={feat.title}
                to={feat.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {iconMap[feat.icon]}
                </div>
                <h3 className="font-semibold text-slate-900">{feat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{feat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 每日复盘预览 ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">每日复盘</h2>
              <p className="mt-1 text-sm text-slate-500">用 CAN SLIM 框架解读每日市场</p>
            </div>
            <Link
              to="/daily-review"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
            >
              查看全部 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dailyReviewHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                  <BarChart3 className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 知识卡片 & 案例库 ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* 知识卡片 */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">知识卡片</h2>
                <Link
                  to="/knowledge-cards"
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                >
                  全部 <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                {knowledgeCardPreview.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-slate-900">{card.title}</h3>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {card.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{card.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 案例库 */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">案例库</h2>
                <Link
                  to="/case-library"
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                >
                  全部 <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                {casePreview.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">{c.name}</h3>
                      <span className="text-sm font-bold text-emerald-600">{c.return}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm text-slate-500">
                      <span>{c.period}</span>
                      <span className="text-slate-300">|</span>
                      <span>{c.key}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">开始你的 CAN SLIM 之旅</h2>
          <p className="mt-4 text-lg text-slate-300">
            从理念认知到模拟实战，一步步建立属于自己的投资体系
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <BookOpen className="h-4 w-4" />
              了解投资理念
            </Link>
            <Link
              to="/mind-map"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Target className="h-4 w-4" />
              查看知识全景图
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}