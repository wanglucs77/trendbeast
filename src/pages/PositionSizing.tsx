import { PieChart, AlertTriangle, TrendingUp, Shield, Calculator, Target } from "lucide-react";

export function PositionSizing() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              仓位管理
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              欧奈尔式仓位管理：基于市场方向、个股风险和个人风险承受能力的动态分配系统
            </p>
          </div>
        </div>
      </section>

      {/* 核心原则 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">仓位管理核心原则</h2>
            <p className="mt-3 text-slate-500">
              仓位管理比选股更重要——它决定了你在市场中的生存能力
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PrincipleCard
              icon={<Calculator className="h-6 w-6" />}
              title="固定比例法"
              desc="每只股票初始仓位不超过总资金的 2-5%，根据市场状况动态调整"
            />
            <PrincipleCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="金字塔加仓"
              desc="仅在股价上涨且形态健康时分批加仓，而非摊平成本式补仓"
            />
            <PrincipleCard
              icon={<Shield className="h-6 w-6" />}
              title="严格止损"
              desc="欧奈尔规则：跌破买入价 7-8% 无条件止损，保护本金"
            />
            <PrincipleCard
              icon={<Target className="h-6 w-6" />}
              title="市场导向"
              desc="根据 M 因子调整总仓位：上升趋势满仓，震荡市半仓，下降趋势轻仓"
            />
          </div>
        </div>
      </section>

      {/* 仓位计算模型 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">仓位计算模型</h2>
          <p className="mt-2 text-sm text-slate-500">
            基于欧奈尔体系改良的风险平价仓位计算器
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* 计算器输入 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-slate-900">仓位参数设置</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">总资金</label>
                  <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400">
                    ¥500,000（示例）
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">市场趋势（M 因子）</label>
                  <div className="mt-1 flex gap-2">
                    {["上升趋势", "震荡市", "下降趋势"].map((t) => (
                      <button
                        key={t}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                          t === "上升趋势"
                            ? "bg-slate-900 text-white"
                            : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">组合分散度</label>
                  <div className="mt-1 flex gap-2">
                    {["集中（3-5只）", "适中（6-8只）", "分散（9-12只）"].map((d) => (
                      <button
                        key={d}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                          d === "适中（6-8只）"
                            ? "bg-slate-900 text-white"
                            : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">单笔最大亏损容忍度</label>
                  <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400">
                    2%（即最多亏损 ¥10,000）
                  </div>
                </div>
              </div>
            </div>

            {/* 计算结果 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-slate-900">建议仓位配置</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-emerald-50 p-4">
                  <div className="text-xs font-medium text-emerald-700">总仓位建议</div>
                  <div className="mt-1 text-3xl font-bold text-emerald-700">65%</div>
                  <div className="mt-1 text-xs text-emerald-600">¥325,000</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">单只股票上限</span>
                    <span className="font-medium text-slate-900">8% → ¥40,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">建议持股数量</span>
                    <span className="font-medium text-slate-900">6 - 8 只</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">单只止损线</span>
                    <span className="font-medium text-red-600">-7% ~ -8%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">最大回撤控制</span>
                    <span className="font-medium text-slate-900">≤ 15%</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">仓位分配示例</h4>
                  <div className="mt-3 space-y-2">
                    {[
                      { name: "核心仓位（4只）", pct: "40%", desc: "高 RS + 高 EPS 评级" },
                      { name: "卫星仓位（2-3只）", pct: "20%", desc: "新兴突破形态" },
                      { name: "现金", pct: "35%", desc: "等待新机会" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm">
                        <div>
                          <span className="font-medium text-slate-900">{item.name}</span>
                          <span className="ml-2 text-xs text-slate-400">{item.desc}</span>
                        </div>
                        <span className="font-bold text-slate-900">{item.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 止损规则 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">欧奈尔式止损规则</h2>
              <div className="mt-6 space-y-4">
                <StopRuleCard
                  rule="硬止损"
                  desc="买入后立即设定 7-8% 的止损线。一旦触发，无条件卖出。这是保护本金的第一道防线。"
                  color="red"
                />
                <StopRuleCard
                  rule="移动止盈"
                  desc="股价上涨 20% 以上时，将止损线上移至成本价上方，确保至少不亏损。之后随股价上涨逐步上移止盈线。"
                  color="emerald"
                />
                <StopRuleCard
                  rule="时间止损"
                  desc="买入后 2-3 周内股价未有显著上涨（涨幅 < 5%），说明判断可能有误，主动减仓观察。"
                  color="amber"
                />
                <StopRuleCard
                  rule="板块止损"
                  desc="如果持仓所在板块整体走弱，即使个股未破止损线，也应考虑减仓。板块效应大于个股。"
                  color="slate"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">加仓与减仓规则</h2>
              <div className="mt-6 space-y-4">
                <AddRuleCard
                  type="加仓信号"
                  items={[
                    "股价突破后站稳关键均线（20日线）",
                    "成交量在上涨日持续放大",
                    "RS 线创出新高",
                    "公司基本面持续改善",
                    "机构持股比例增加",
                  ]}
                  color="emerald"
                />
                <AddRuleCard
                  type="减仓信号"
                  items={[
                    "大盘 M 因子转为下降趋势",
                    "个股涨幅超过目标（20-30%）分批止盈",
                    "股价跌破 50 日均线",
                    "成交量异常放大但价格停滞",
                    "板块龙头股开始走弱",
                  ]}
                  color="red"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 风险警示 */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <h3 className="font-semibold text-amber-800">仓位管理黄金法则</h3>
                <p className="mt-1 text-sm text-amber-700">
                  永远不要让任何一只股票的亏损超过总资金的 2%。这意味着如果你设置 8% 的止损线，
                  单只股票的仓位不应超过总资金的 25%。在实盘中，建议单只股票初始仓位控制在 2-5%。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PrincipleCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}

function StopRuleCard({ rule, desc, color }: { rule: string; desc: string; color: string }) {
  const colorMap: Record<string, string> = {
    red: "border-red-200 bg-red-50 text-red-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
  };
  return (
    <div className={`rounded-xl border p-5 ${colorMap[color]}`}>
      <h3 className="font-semibold">{rule}</h3>
      <p className={`mt-1 text-sm ${color === "red" ? "text-red-600" : color === "emerald" ? "text-emerald-600" : color === "amber" ? "text-amber-600" : "text-slate-500"}`}>
        {desc}
      </p>
    </div>
  );
}

function AddRuleCard({ type, items, color }: { type: string; items: string[]; color: string }) {
  const dotColor = color === "emerald" ? "bg-emerald-500" : "bg-red-500";
  return (
    <div className={`rounded-xl border p-5 ${color === "emerald" ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}`}>
      <h3 className={`font-semibold ${color === "emerald" ? "text-emerald-700" : "text-red-700"}`}>{type}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}