import { FolderOpen, TrendingUp, TrendingDown, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";

const caseData = [
  {
    id: "ningde-300750",
    name: "宁德时代 (300750)",
    period: "2020 - 2021",
    return: "+380%",
    color: "emerald",
    tags: ["C 因子", "L 因子", "I 因子"],
    summary: "新能源革命催化 + 业绩爆发 + 机构重仓，CAN SLIM 全要素共振的经典案例",
    timeline: [
      { date: "2020年3月", event: "疫情底后反弹，股价约 ¥80", type: "entry" },
      { date: "2020年6月", event: "Q1 业绩同比 +35%，EPS 评级跃升至 92", type: "signal" },
      { date: "2020年9月", event: "RS 线创出新高，突破杯柄形态买入点 ¥110", type: "buy" },
      { date: "2021年1月", event: "股价突破 ¥200，基金持仓环比 +42%", type: "signal" },
      { date: "2021年7月", event: "股价 ¥280，EPS 评级 98，RS 评级 96", type: "hold" },
      { date: "2021年12月", event: "最高 ¥385，完成 380% 涨幅", type: "exit" },
    ],
    analysis: [
      { factor: "C — 当季业绩", detail: "2020年起连续 6 个季度 EPS 同比增速 > 50% 以上，营收增速同步。", score: 95 },
      { factor: "A — 年度业绩", detail: "2019-2021 年年度 EPS 增速分别为 34%、42%、68%，复合增速极强。", score: 96 },
      { factor: "N — 新产品/新高", detail: "CTP 电池技术、磷酸铁锂路线突破、特斯拉订单落地。股价不断创新高。", score: 94 },
      { factor: "S — 供需", detail: "流通市值适中，成交活跃，上涨放量下跌缩量，供需关系健康。", score: 88 },
      { factor: "L — 龙头", detail: "动力电池全球市占率第一，绝对行业龙头。RS 评级长期维持 90+。", score: 98 },
      { factor: "I — 机构", detail: "2020年 Q3 起基金持仓从 68 家增至 2021年 Q3 的 327 家。", score: 95 },
      { factor: "M — 市场方向", detail: "2020-2021 年新能源赛道整体牛市，大盘 M 因子持续向好。", score: 92 },
    ],
    lesson: "宁德时代完美展示了当 CAN SLIM 七要素全部共振时，一只龙头股可以走多远。关键启示：① 耐心等待杯柄形态完成 ② 突破后坚定持有 ③ 只要 M 因子和基本面不变，不要提前下车。",
  },
  {
    id: "dongfang-300059",
    name: "东方财富 (300059)",
    period: "2019 - 2020",
    return: "+220%",
    color: "blue",
    tags: ["M 因子", "L 因子", "N 因子"],
    summary: "券商龙头 + 互联网券商新模式 + 牛市周期配合",
    timeline: [
      { date: "2019年1月", event: "大盘见底反弹，东方财富率先企稳 ¥10", type: "entry" },
      { date: "2019年6月", event: "EPS 评级从 78 升至 91，业绩持续改善", type: "signal" },
      { date: "2019年9月", event: "突破箱体整理 ¥16，RS 线创出年内新高", type: "buy" },
      { date: "2020年3月", event: "疫情冲击回调至 ¥14，但缩量回调形态健康", type: "hold" },
      { date: "2020年7月", event: "券商板块全面爆发，股价 ¥28，放量突破", type: "signal" },
      { date: "2020年12月", event: "最高 ¥32，完成 220% 涨幅", type: "exit" },
    ],
    analysis: [
      { factor: "C — 当季业绩", detail: "2019-2020 年每季度 EPS 增速均在 30-60% 之间。", score: 90 },
      { factor: "A — 年度业绩", detail: "年度 EPS 增速 2019年 +45%，2020年 +58%，持续高增。", score: 92 },
      { factor: "N — 新产品/新高", detail: "互联网券商模式颠覆传统经纪业务，天天基金网市占率持续提升。", score: 88 },
      { factor: "S — 供需", detail: "流通股本略大但成交活跃，机构资金承接力强。", score: 80 },
      { factor: "L — 龙头", detail: "互联网券商赛道绝对龙头，RS 评级 85-93。", score: 94 },
      { factor: "I — 机构", detail: "机构持仓从 2019年 Q1 的 89 家增至 2020年 Q3 的 256 家。", score: 92 },
      { factor: "M — 市场方向", detail: "2019-2020 年 A 股整体牛市，券商板块领涨大盘。", score: 95 },
    ],
    lesson: "东方财富的案例说明：即使流通股本偏大（S 因子不够完美），只要其他因子足够强，特别是 M 因子和市场周期配合，龙头股仍然可以走出大行情。",
  },
  {
    id: "yangguang-300274",
    name: "阳光电源 (300274)",
    period: "2020 - 2021",
    return: "+800%",
    color: "emerald",
    tags: ["N 因子", "A 因子", "全面共振"],
    summary: "逆变器龙头，新能源革命最大受益者之一，EPS 爆发式增长",
    timeline: [
      { date: "2020年4月", event: "股价 ¥12，逆变器出货量全球第二", type: "entry" },
      { date: "2020年8月", event: "Q2 营收同比 +55%，EPS 增速 +81%", type: "signal" },
      { date: "2020年10月", event: "突破杯柄形态买入点 ¥22，成交量放大 3 倍", type: "buy" },
      { date: "2021年1月", event: "股价 ¥60，基金持仓从 23 家增至 104 家", type: "signal" },
      { date: "2021年7月", event: "股价 ¥100，出货量全球第一", type: "hold" },
      { date: "2021年10月", event: "最高 ¥108，完成 800% 涨幅", type: "exit" },
    ],
    analysis: [
      { factor: "C — 当季业绩", detail: "连续 7 个季度 EPS 同比增速 > 60%，2021年 Q1 高达 +142%。", score: 99 },
      { factor: "A — 年度业绩", detail: "年度 EPS 增速 2020年 +92%，2021年 +138%，爆发式增长。", score: 99 },
      { factor: "N — 新产品/新高", detail: "全球碳中和政策催化，光伏逆变器需求井喷，股价持续创新高。", score: 97 },
      { factor: "S — 供需", detail: "中小盘股，流通市值适中，主力控盘度较高。", score: 90 },
      { factor: "L — 龙头", detail: "逆变器全球市占率从第 2 升至第 1，RS 评级 95+。", score: 96 },
      { factor: "I — 机构", detail: "机构持仓 1 年内从 23 家飙升至 187 家。", score: 94 },
      { factor: "M — 市场方向", detail: "光伏新能源板块 2020-2021 超级牛市周期。", score: 96 },
    ],
    lesson: "阳光电源是 CAN SLIM 打分的满分案例。C 和 A 的爆发力 + N 的时代性催化 + 中小盘 S 因子的配合，造就了 800% 涨幅。说明当基本面爆发与技术面突破共振时，涨幅远超想象。",
  },
];

export function CaseLibrary() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const selected = caseData.find((c) => c.id === activeCase);

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              案例库
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              以 CAN SLIM 框架深度拆解历史牛股，理解七要素如何在实战中共振
            </p>
          </div>
        </div>
      </section>

      {/* 案例列表 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {!selected ? (
            <>
              <div className="mx-auto max-w-2xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">精选案例</h2>
                <p className="mt-3 text-slate-500">点击案例查看完整的 CAN SLIM 拆解分析</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseData.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCase(c.id)}
                    className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-left transition hover:shadow-md hover:border-slate-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">{c.name}</h3>
                      <span className={`text-lg font-bold ${c.color === "emerald" ? "text-emerald-600" : "text-blue-600"}`}>
                        {c.return}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="h-3 w-3" />
                      {c.period}
                    </div>
                    <p className="mt-3 text-sm text-slate-500">{c.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-900">
                      查看完整分析 <ChevronRight className="h-3 w-3" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : selected ? (
            <DetailedCase case={selected} onBack={() => setActiveCase(null)} />
          ) : null}
        </div>
      </section>
    </div>
  );
}

function DetailedCase({ case: c, onBack }: { case: typeof caseData[0]; onBack: () => void }) {
  const colorMap: Record<string, string> = {
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
    blue: "text-blue-600 bg-blue-50 border-blue-200",
  };

  const typeLabels: Record<string, string> = {
    entry: "起点",
    signal: "信号",
    buy: "买入",
    hold: "持有",
    exit: "退出",
  };

  const typeStyles: Record<string, string> = {
    entry: "bg-slate-100 text-slate-600",
    signal: "bg-amber-100 text-amber-700",
    buy: "bg-emerald-100 text-emerald-700",
    hold: "bg-blue-100 text-blue-700",
    exit: "bg-purple-100 text-purple-700",
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ChevronRight className="h-4 w-4 rotate-180" />
        返回案例列表
      </button>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">{c.name}</h2>
            <div className="mt-1 flex items-center gap-3 text-sm text-slate-400">
              <Calendar className="h-4 w-4" />
              {c.period}
            </div>
          </div>
          <span className={`text-4xl font-bold ${c.color === "emerald" ? "text-emerald-600" : "text-blue-600"}`}>
            {c.return}
          </span>
        </div>

        <p className="mt-4 text-base text-slate-600">{c.summary}</p>

        {/* 时间线 */}
        <div className="mt-8">
          <h3 className="font-semibold text-slate-900 mb-4">关键时间线</h3>
          <div className="space-y-3">
            {c.timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`h-4 w-4 rounded-full border-2 ${
                    t.type === "buy" ? "border-emerald-500 bg-emerald-500" :
                    t.type === "exit" ? "border-purple-500 bg-purple-500" :
                    "border-slate-300 bg-white"
                  }`} />
                  {i < c.timeline.length - 1 && <div className="mt-1 h-full w-px bg-slate-200" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">{t.date}</span>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${typeStyles[t.type]}`}>
                      {typeLabels[t.type]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 七因子评分 */}
        <div className="mt-10">
          <h3 className="font-semibold text-slate-900 mb-4">CAN SLIM 七因子评分</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.analysis.map((a) => (
              <div key={a.factor} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-900 text-sm">{a.factor}</h4>
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ${
                    a.score >= 90 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {a.score}/100
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 经验教训 */}
        <div className="mt-8 rounded-2xl border-l-4 border-slate-900 bg-slate-50 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">📌 案例启示</h3>
          <p className="text-sm leading-relaxed text-slate-600">{c.lesson}</p>
        </div>
      </div>
    </div>
  );
}