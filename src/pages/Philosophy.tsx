import { philosophySummary } from "../data/site";
import { BookOpen, Quote, ArrowRight, BarChart4, TrendingUp, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Philosophy() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              投资理念
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              CAN SLIM 是威廉·欧奈尔在其经典著作《笑傲股市》中提出的成长股投资体系，
              融合了基本面分析、技术分析和市场心理学，被全球顶级投资者验证超过半个世纪。
            </p>
          </div>
        </div>
      </section>

      {/* 核心 quote */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="rounded-2xl border-l-4 border-slate-900 bg-slate-50 p-8">
            <Quote className="mb-3 h-8 w-8 text-slate-300" />
            <p className="text-xl leading-relaxed text-slate-700 sm:text-2xl">
              在股市中获胜的关键不是要成为最聪明的人，而是要拥有一套经过验证的系统，
              并且有纪律地执行它。
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">—— 威廉·欧奈尔</p>
          </div>
        </div>
      </section>

      {/* CAN SLIM 详解 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">七要素深度解读</h2>
            <p className="mt-3 text-slate-500">
              每一个字母都代表一个经过数据验证的选股维度
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {philosophySummary.items.map((item, idx) => (
              <div
                key={item.letter}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-2xl font-bold text-white">
                    {item.letter}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <h3 className="text-xl font-bold text-slate-900">{item.word}</h3>
                      <span className="hidden text-slate-300 sm:inline">·</span>
                      <span className="text-sm font-medium text-slate-500">{item.meaning}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {explanations[item.letter]}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags[item.letter].map((tag) => (
                        <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 体系内核 */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">体系内核</h2>
            <p className="mt-3 text-slate-500">CAN SLIM 并非机械的选股清单，而是一套有机的投资思维框架</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {cores.map((core) => (
              <div key={core.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                  {core.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{core.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{core.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 导航到相关模块 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <RelatedCard
              title="每日复盘"
              desc="用 CAN SLIM 框架分析当日市场"
              href="/daily-review"
              icon={<BarChart4 className="h-5 w-5" />}
            />
            <RelatedCard
              title="知识卡片"
              desc="快速回顾核心概念"
              href="/knowledge-cards"
              icon={<Search className="h-5 w-5" />}
            />
            <RelatedCard
              title="案例库"
              desc="历史牛股的全维度拆解"
              href="/case-library"
              icon={<BookOpen className="h-5 w-5" />}
            />
            <RelatedCard
              title="投资脑图"
              desc="可视化体系全景图"
              href="/mind-map"
              icon={<TrendingUp className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedCard({ title, desc, href, icon }: { title: string; desc: string; href: string; icon: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </Link>
  );
}

const explanations: Record<string, string> = {
  C: "欧奈尔的研究发现，股价大涨的股票在当季财报公布前往往已经显示出每股收益的大幅增长。他要求当季EPS同比增长至少25%，最好在50%以上。同时关注营收增速是否同步增长，以及利润率是否在改善。",
  A: "不仅看单季业绩，更要看过去3年的年度EPS增长率。欧奈尔要求年度EPS增长率在25%以上，且每年保持稳定增长。他发明的 EPS 评级（1-99分）仅选择90分以上的股票。",
  N: "股价上涨需要催化剂——新产品、新服务、新管理层或行业新趋势。同时强调买入时机：股价从合理整理形态（如杯柄形态）突破并创出价格新高时买入，而不是在低位抄底。",
  S: "关注流通股本大小。欧奈尔偏好中小盘股（流通市值适中），因为筹码相对集中更容易被主力推动。同时结合成交量变化判断供需关系，上涨放量、下跌缩量为健康信号。",
  L: "在每个行业中，选择相对强度（RS）排名靠前的龙头股，而非二三名。欧奈尔的 RS 评级将个股过去12个月的价格表现与所有股票比较，仅选80分以上的。龙头股在牛市中涨幅最大，在熊市中也相对抗跌。",
  I: "机构投资者（基金、保险、养老金等）是推动股价上涨的主要力量。关注季度机构持仓变化，选择机构数量增加且本季度有新机构买入的股票。但避免机构过度拥挤的股票。",
  M: "这是最关键的一环——每天判断市场整体方向。在大盘处于上升趋势时全力做多，下降趋势时持币观望或做空。欧奈尔通过每日追踪指数走势、龙头股表现和成交量变化来判断市场方向。",
};

const tags: Record<string, string[]> = {
  C: ["基本面", "净利润", "营收增长"],
  A: ["持续性", "EPS评级", "复合增长"],
  N: ["催化剂", "杯柄形态", "突破买入"],
  S: ["流通盘", "成交量", "供需"],
  L: ["行业龙头", "RS评级", "相对强度"],
  I: ["机构持仓", "聪明钱", "筹码分布"],
  M: ["大势研判", "指数分析", "风险管理"],
};

const cores = [
  {
    title: "数据驱动",
    desc: "欧奈尔用数十年历史数据验证每一个选股因子，而非凭感觉或传闻做决策。CAN SLIM 的每个维度都有数据支撑。",
    icon: <BarChart4 className="h-6 w-6" />,
  },
  {
    title: "系统化决策",
    desc: "将选股、择时、仓位管理、风险控制形成一个完整的闭环系统，避免随机交易和情绪化决策。",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "纪律执行",
    desc: "严格遵循买入规则（突破点买入、止损规则-7%~8%）、卖出规则（获利20%以上分批止盈），不因情绪而偏离系统。",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];