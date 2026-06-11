import { Brain, Lightbulb, RefreshCw, Eye, Heart, AlertTriangle, BookOpen } from "lucide-react";

export function TradingPsychology() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              交易心理
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              欧奈尔认为：投资中 80% 是心理层面，20% 是技术层面。纪律性是长期盈利的基石。
            </p>
          </div>
        </div>
      </section>

      {/* 认知偏差 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">常见认知偏差</h2>
            <p className="mt-3 text-slate-500">
              识别这些偏差是克服它们的第一步
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BiasCard
              icon={<Eye className="h-6 w-6" />}
              title="确认偏误"
              desc="只留意支持自己持仓的信息，忽视相反信号。导致死扛亏损仓、过早卖出盈利仓。"
              fix="买入前写下做空理由清单，每天强迫自己阅读"
            />
            <BiasCard
              icon={<Heart className="h-6 w-6" />}
              title="锚定效应"
              desc="对某只股票产生情感依赖——「我在这只股票上赚过钱」会导致反复交易同一只，错失新机会。"
              fix="每只股票独立评估，不因过去盈亏影响当下判断"
            />
            <BiasCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="处置效应"
              desc="过早卖出盈利股（怕利润回吐），过久持有亏损股（等回本）。完全违背了「截断亏损，让利润奔跑」。"
              fix="设定明确的止盈规则（+20%走一半）和止损规则（-8%必走）"
            />
            <BiasCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="损失厌恶"
              desc="亏损 100 元的痛苦感约等于盈利 200 元的快乐感。这种不对称导致投资者在亏损时不愿止损。"
              fix="将止损视为交易成本的一部分，而非失败"
            />
            <BiasCard
              icon={<Brain className="h-6 w-6" />}
              title="过度自信"
              desc="连续盈利 2-3 次后，误以为自己「看透了市场」，开始忽视风险、放大仓位。"
              fix="每次交易后记录决策理由，定期复盘错误判断"
            />
            <BiasCard
              icon={<Lightbulb className="h-6 w-6" />}
              title="近因效应"
              desc="过度关注最近几天的行情，用短期走势替代长期趋势判断。追涨杀跌的根源。"
              fix="日线级别的判断放在周线和月线框架下评估"
            />
          </div>
        </div>
      </section>

      {/* 交易心理日记 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">交易心理日记</h2>
              <p className="mt-2 text-sm text-slate-500">
                每次交易前后记录自己的心理状态，逐步培养自我觉察能力
              </p>
              <div className="mt-6 space-y-4">
                <JournalCard
                  question="交易前问自己"
                  items={[
                    "这笔交易符合我的选股规则吗，还是因为 FOMO？",
                    "当前市场 M 因子支持做多吗？",
                    "如果这笔交易亏损 8%，我能平静接受吗？",
                    "我的仓位大小是否符合仓位管理规则？",
                  ]}
                />
                <JournalCard
                  question="交易后问自己"
                  items={[
                    "我是否严格按照计划执行了交易？",
                    "有没有任何情绪因素影响了我的决策？",
                    "这次交易的决策记录完整吗？",
                    "如果重新来一次，我会做同样的决策吗？",
                  ]}
                />
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">欧奈尔的交易心理法则</h3>
              <div className="mt-4 space-y-4">
                {[
                  { rule: "先研究，后交易", desc: "在投入真金白银之前，至少用模拟盘验证你的策略 6-12 个月。" },
                  { rule: "计划你的交易，交易你的计划", desc: "开盘前写下买入/卖出条件清单，盘中严格执行，不做临时决定。" },
                  { rule: "永远不要让情绪代替纪律", desc: "设定好止损单和止盈单，让系统帮你执行，不给情绪干涉的机会。" },
                  { rule: "亏损是学费，不是失败", desc: "每次亏损都是一次免费的学习机会。记录它、分析它、改进它。" },
                  { rule: "市场永远是对的", desc: "不要和市场争论。如果行情与你的判断相反，先出来，再重新评估。" },
                  { rule: "保持谦逊", desc: "市场不需要知道你是谁。赚了不要得意，亏了不要气馁。保持学习和进步。" },
                ].map((item) => (
                  <div key={item.rule} className="border-l-2 border-slate-300 pl-4">
                    <h4 className="font-medium text-slate-900">{item.rule}</h4>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 每日心理检查 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">每日心理状态检查</h2>
          <p className="mt-2 text-sm text-slate-500">
            开盘前花 5 分钟完成这份心理检查清单
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CheckCard
              emoji="😊"
              title="平静"
              desc="我一个昨晚睡得好，今天心情平稳，没有急于交易的感觉。"
              good
            />
            <CheckCard
              emoji="😰"
              title="焦虑"
              desc="我担心踏空或亏损，急于进场或补仓。→ 建议先观察 30 分钟再做决定。"
            />
            <CheckCard
              emoji="😤"
              title="报复性"
              desc="我刚刚亏损了一笔，想马上赚回来。→ 停止交易，去散步或冥想 15 分钟。"
            />
            <CheckCard
              emoji="🤩"
              title="过度兴奋"
              desc="我连续盈利了几天，感觉「稳了」。主动减仓 10-20%，降低风险敞口。"
            />
          </div>
        </div>
      </section>

      {/* 推荐阅读 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-slate-700" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">推荐阅读</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "《笑傲股市》", author: "威廉·欧奈尔", desc: "CAN SLIM 体系原典" },
              { title: "《交易心理分析》", author: "马克·道格拉斯", desc: "克服交易心理障碍经典" },
              { title: "《思考，快与慢》", author: "丹尼尔·卡尼曼", desc: "认知偏差与决策心理学" },
              { title: "《金融炼金术》", author: "乔治·索罗斯", desc: "反身性理论与市场心理" },
            ].map((book) => (
              <div key={book.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{book.title}</h3>
                <p className="mt-1 text-xs text-slate-400">{book.author}</p>
                <p className="mt-2 text-sm text-slate-500">{book.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BiasCard({ icon, title, desc, fix }: { icon: React.ReactNode; title: string; desc: string; fix: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
      <div className="mt-3 rounded-lg bg-slate-50 p-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">对策</span>
        <p className="mt-1 text-xs text-slate-600">{fix}</p>
      </div>
    </div>
  );
}

function JournalCard({ question, items }: { question: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{question}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" readOnly />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckCard({ emoji, title, desc, good }: { emoji: string; title: string; desc: string; good?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 shadow-sm ${good ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white"}`}>
      <div className="mb-2 text-2xl">{emoji}</div>
      <h3 className={`font-semibold ${good ? "text-emerald-700" : "text-slate-900"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${good ? "text-emerald-600" : "text-slate-500"}`}>{desc}</p>
    </div>
  );
}