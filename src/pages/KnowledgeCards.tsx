import { CreditCard, Search, Bookmark, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const allCards = [
  {
    id: "cup-handle",
    title: "杯柄形态",
    category: "技术形态",
    level: "核心",
    tags: ["买入点", "整理形态", "突破"],
    content: "杯柄形态是欧奈尔最经典的买入形态。形如茶杯：左壁下跌→杯底横盘→右壁回升→柄部小幅回调→突破柄部高点。持续时间通常为 7-65 周，杯底越圆越好，柄部回调幅度不应超过杯身涨幅的 15%。突破柄部高点且成交量放大 50% 以上时为最佳买入点。",
  },
  {
    id: "eps-rating",
    title: "EPS 评级",
    category: "基本面",
    level: "核心",
    tags: ["选股", "评分", "成长性"],
    content: "欧奈尔将每只股票的过去 2 年 EPS 增长率按百分位排名，1-99 分。仅选择 EPS 评级在 90 分以上的股票。计算方法：最近 2 个季度的 EPS 同比增速占 2/3 权重，过去 3-5 年的年度 EPS 增速占 1/3 权重。EPS 评级与股价表现在历史数据中有高度正相关性。",
  },
  {
    id: "rs-line",
    title: "RS 线（相对强度线）",
    category: "技术分析",
    level: "核心",
    tags: ["动量", "龙头筛选", "比较"],
    content: "将个股价格表现与大盘指数（通常为标普500/上证指数）进行比较的曲线。RS 线向上表示个股表现优于大盘。欧奈尔的 RS 评级将个股过去 12 个月的价格表现与所有股票对比，评分 1-99。买入条件：RS 评级 ≥ 80，且 RS 线处于上升趋势或刚刚向上突破。",
  },
  {
    id: "m-factor",
    title: "M 因子 — 市场方向",
    category: "市场分析",
    level: "核心",
    tags: ["大势", "择时", "风险管理"],
    content: "CAN SLIM 中最重要的字母 M。每天追踪大盘指数的趋势方向。欧奈尔通过观察：① 指数日线是否在关键均线之上 ② 上涨日成交量是否放大、下跌日是否缩量 ③ 龙头股是否在领涨 ④ 市场宽度（涨跌家数比）判断趋势。上升趋势全力做多，下降趋势大幅减仓至 0-20%。",
  },
  {
    id: "buy-point",
    title: "突破买入点",
    category: "择时",
    level: "核心",
    tags: ["买入", "形态突破", "成交量"],
    content: "最佳买入点是股票从合理整理形态突破并创出价格新高的瞬间。买入点通常位于形态的最高点上方 10 美分（或对应人民币最小变动价位）。买入当天成交量必须比 50 日均量放大至少 50%。避免在突破后股价已上涨 5% 以上时追入。",
  },
  {
    id: "stop-loss",
    title: "7-8% 止损规则",
    category: "风险管理",
    level: "核心",
    tags: ["卖出", "止损", "纪律"],
    content: "欧奈尔最著名的规则：一旦股价从买入价下跌 7-8%，立即无条件卖出。不要让任何亏损演变为 20-30% 的深套。这是保护本金、保存交易资本的关键纪律。止损后如果股价重新突破买入点并放量，可以再次买入。",
  },
  {
    id: "pyramiding",
    title: "金字塔加仓法",
    category: "仓位管理",
    level: "进阶",
    tags: ["加仓", "仓位", "风险控制"],
    content: "仅在股价上涨且形态健康时分批加仓，而非在下跌时补仓以摊平成本。首次建立 60-70% 仓位，股价上涨 2.5-5% 后加至 100%。如果加仓后股价回落至成本价，立即卖出加仓部分。永远不要因为股价更便宜而买入。",
  },
  {
    id: "institutional",
    title: "机构持仓分析",
    category: "市场分析",
    level: "进阶",
    tags: ["机构", "聪明钱", "持仓"],
    content: "关注最近一个季度机构投资者（基金、养老金、保险等）的持仓变化。理想情况：① 机构总数在增加 ② 本季度有新机构买入 ③ 机构持股比例上升但尚未过度拥挤。避免机构持股比例过度集中（> 50%），否则一旦机构集体抛售，跌幅巨大。",
  },
  {
    id: "sector-leader",
    title: "行业龙头法则",
    category: "选股",
    level: "核心",
    tags: ["龙头", "相对强度", "行业"],
    content: "在每个行业中，只买 RS 排名第一的龙头股。龙头股的特征：① 在行业中营收和利润排名前列 ② 股价表现强于行业指数 ③ 具有独特的竞争优势（护城河） ④ 新产品或新服务引领行业趋势。二线股在牛市中涨幅落后，在熊市中跌幅更大。",
  },
  {
    id: "volume-analysis",
    title: "成交量分析",
    category: "技术分析",
    level: "进阶",
    tags: ["量价关系", "供需", "确认信号"],
    content: "成交量是验证价格行为的关键指标。健康上涨：价格上涨 + 成交量放大。弱势上涨：价格上涨 + 成交量缩小（缺乏信心）。机构吸筹：横盘期间成交量温和放大。机构派发：高位出现放量滞涨。底部放量：下跌末期出现恐慌性抛售后放量反弹，可能是底部信号。",
  },
];

const categories = ["全部", "技术形态", "基本面", "技术分析", "市场分析", "择时", "风险管理", "仓位管理", "选股"];
const levels = ["全部", "核心", "进阶"];

export function KnowledgeCards() {
  const [activeCat, setActiveCat] = useState("全部");
  const [activeLevel, setActiveLevel] = useState("全部");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = allCards.filter((card) => {
    if (activeCat !== "全部" && card.category !== activeCat) return false;
    if (activeLevel !== "全部" && card.level !== activeLevel) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        card.title.toLowerCase().includes(s) ||
        card.tags.some((t) => t.toLowerCase().includes(s)) ||
        card.content.includes(search)
      );
    }
    return true;
  });

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              知识卡片
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              将 CAN SLIM 体系的核心概念提炼为可快速复习的知识卡片
            </p>
          </div>
        </div>
      </section>

      {/* 搜索与筛选 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜索卡片..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">分类：</span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeCat === cat
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">难度：</span>
              <div className="flex gap-1.5">
                {levels.map((lv) => (
                  <button
                    key={lv}
                    onClick={() => setActiveLevel(lv)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeLevel === lv
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {lv}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 卡片列表 */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-slate-400">
            共 {filtered.length} 张卡片
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((card) => (
              <div
                key={card.id}
                className={`rounded-xl border bg-white shadow-sm transition-all ${
                  expanded === card.id
                    ? "border-slate-300 shadow-md sm:col-span-2 lg:col-span-3"
                    : "border-slate-200 hover:shadow-md hover:border-slate-300"
                }`}
              >
                <button
                  className="w-full p-5 text-left"
                  onClick={() => setExpanded(expanded === card.id ? null : card.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                        {card.id.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{card.title}</h3>
                        <span className="text-xs text-slate-400">{card.category}</span>
                      </div>
                    </div>
                    <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                      card.level === "核心" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {card.level}
                    </span>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed text-slate-500 ${
                    expanded === card.id ? "" : "line-clamp-2"
                  }`}>
                    {card.content}
                  </p>
                  {expanded !== card.id && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                    {expanded === card.id ? "点击收起" : "点击展开全文"}
                    <ChevronRight className={`h-3 w-3 transition-transform ${expanded === card.id ? "rotate-90" : ""}`} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}