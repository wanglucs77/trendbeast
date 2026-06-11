import { BarChart3, TrendingUp, TrendingDown, Calendar, Tag, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { marketStats } from "../data/site";

export function DailyReview() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              每日复盘
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              以 CAN SLIM 体系为框架，每日追踪市场方向、强势板块与龙头个股
            </p>
          </div>
        </div>
      </section>

      {/* 市场概览 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-slate-700" />
            <h2 className="text-lg font-bold text-slate-900">今日市场概览</h2>
            <span className="ml-auto text-sm text-slate-400">2026-06-11</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-slate-500">{stat.label}</span>
                <div className="mt-1 flex items-end justify-between">
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  <span className={`inline-flex items-center gap-0.5 text-sm font-medium ${stat.up ? "text-emerald-600" : "text-red-600"}`}>
                    {stat.up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M 因子分析 */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">📊 M 因子：市场方向判断</h2>
          <p className="mt-2 text-sm text-slate-500">
            欧奈尔强调：90%以上的个股走势跟随大盘方向。先判断市场趋势，再做个股决策。
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* 大盘趋势 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">大盘趋势信号</h3>
              <div className="mt-4 space-y-3">
                <SignalRow label="上证指数" signal="上升趋势" status="up" />
                <SignalRow label="沪深300" signal="上升趋势" status="up" />
                <SignalRow label="创业板指" signal="横盘震荡" status="neutral" />
                <SignalRow label="科创50" signal="上升趋势" status="up" />
              </div>
            </div>

            {/* 板块轮动 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">强势板块 Top 5</h3>
              <div className="mt-4 space-y-3">
                {["半导体", "AI 算力", "消费电子", "新能源车", "创新药"].map((sector, i) => (
                  <div key={sector} className="flex items-center gap-3">
                    <span className="w-5 text-xs font-bold text-slate-400">{i + 1}</span>
                    <span className="flex-1 text-sm font-medium text-slate-900">{sector}</span>
                    <span className="text-xs font-medium text-emerald-600">+{3.2 - i * 0.4}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 市场情绪 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">市场情绪指标</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">上涨/下跌家数</span>
                    <span className="font-medium text-slate-900">2865 : 1287</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[69%] rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">涨停/跌停</span>
                    <span className="font-medium text-slate-900">73 : 5</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[94%] rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  北向资金：<span className="font-medium text-emerald-600">+36.8亿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 今日强势股 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">📈 今日强势股扫描</h2>
          <p className="mt-2 text-sm text-slate-500">
            运用 CAN SLIM 框架筛选当日表现突出的个股
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 font-semibold text-slate-500">代码</th>
                  <th className="pb-3 font-semibold text-slate-500">名称</th>
                  <th className="pb-3 font-semibold text-slate-500">涨幅</th>
                  <th className="pb-3 font-semibold text-slate-500">RS 评级</th>
                  <th className="pb-3 font-semibold text-slate-500">EPS 评级</th>
                  <th className="pb-3 font-semibold text-slate-500">形态</th>
                  <th className="pb-3 font-semibold text-slate-500">CAN SLIM 打分</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((s) => (
                  <tr key={s.code} className="border-b border-slate-100 transition hover:bg-slate-100/50">
                    <td className="py-3 font-medium text-slate-900">{s.code}</td>
                    <td className="py-3 text-slate-900">{s.name}</td>
                    <td className="py-3">
                      <span className={s.change.startsWith("+") ? "text-emerald-600" : "text-red-600"}>
                        {s.change}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${s.rs >= 90 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                        {s.rs}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${s.eps >= 90 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                        {s.eps}
                      </span>
                    </td>
                    <td className="py-3 text-slate-600">{s.pattern}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ${
                        s.score >= 6 ? "bg-slate-900 text-white" : s.score >= 4 ? "bg-slate-200 text-slate-700" : "bg-slate-100 text-slate-400"
                      }`}>
                        {s.score}/7
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400">* 数据仅供学习演示，不构成投资建议</p>
        </div>
      </section>

      {/* 复盘日志 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">📝 复盘日志</h2>
          <p className="mt-2 text-sm text-slate-500">每日市场观察与 CAN SLIM 框架下的思考</p>

          <div className="mt-8 space-y-6">
            {logs.map((log) => (
              <div key={log.date} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {log.date}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{log.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{log.content}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {log.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SignalRow({ label, signal, status }: { label: string; signal: string; status: "up" | "down" | "neutral" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`inline-flex items-center gap-1 text-sm font-medium ${
        status === "up" ? "text-emerald-600" : status === "down" ? "text-red-600" : "text-amber-600"
      }`}>
        {status === "up" ? <TrendingUp className="h-3.5 w-3.5" /> : status === "down" ? <TrendingDown className="h-3.5 w-3.5" /> : <BarChart3 className="h-3.5 w-3.5" />}
        {signal}
      </span>
    </div>
  );
}

const stockData = [
  { code: "688981", name: "中芯国际", change: "+4.87%", rs: 95, eps: 88, pattern: "杯柄突破", score: 6 },
  { code: "300750", name: "宁德时代", change: "+3.21%", rs: 91, eps: 96, pattern: "高紧旗形", score: 6 },
  { code: "002230", name: "科大讯飞", change: "+5.63%", rs: 89, eps: 82, pattern: "突破", score: 5 },
  { code: "601012", name: "隆基绿能", change: "+2.15%", rs: 76, eps: 92, pattern: "震荡", score: 4 },
  { code: "300059", name: "东方财富", change: "+1.84%", rs: 85, eps: 90, pattern: "箱体整理", score: 5 },
  { code: "688111", name: "金山办公", change: "-0.92%", rs: 82, eps: 87, pattern: "回调", score: 4 },
];

const logs = [
  {
    date: "2026-06-11",
    title: "M 因子确认上升趋势，科技板块领涨",
    content: "今日三大指数全线上涨，上证指数站上20日均线，成交量较昨日放大12%。M 因子信号由谨慎转为积极。半导体板块受 AI 算力需求提振领涨，中芯国际突破杯柄形态上轨，成交量配合良好。北向资金连续3日净流入，机构参与意愿增强。维持60%仓位，重点配置科技龙头。",
    tags: ["M 因子", "趋势确认", "科技", "成交量"],
  },
  {
    date: "2026-06-10",
    title: "市场缩量调整，等待方向选择",
    content: "今日指数小幅回调，成交量萎缩至8000亿以下，表明抛压有限。龙头股普遍缩量回调，属于正常整理。关注中芯国际、宁德时代等 CAN SLIM 高评分个股能否在关键均线处获得支撑。维持50%仓位，不急于加仓。",
    tags: ["缩量调整", "等待信号", "仓位管理"],
  },
];