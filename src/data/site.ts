export const siteConfig = {
  name: "CAN SLIM 投研社",
  headline: "以欧奈尔 CAN SLIM 体系为纲，构建系统化投资框架",
  subheadline: "从选股到择时，从仓位到心理，全方位提升投资认知",
  description:
    "CAN SLIM 是威廉·欧奈尔（William O'Neil）提出的一套结合基本面与技术面的成长股投资体系。本平台系统化呈现该体系的每一个模块，帮助你从理念到实战逐步建立完整的投资框架。",
};

export const navItems = [
  { label: "主页", href: "/", page: "Home" },
  { label: "投资理念", href: "/philosophy", page: "Philosophy" },
  { label: "每日复盘", href: "/daily-review", page: "DailyReview" },
  { label: "仓位管理", href: "/position-sizing", page: "PositionSizing" },
  { label: "交易心理", href: "/trading-psychology", page: "TradingPsychology" },
  { label: "知识卡片", href: "/knowledge-cards", page: "KnowledgeCards" },
  { label: "案例库", href: "/case-library", page: "CaseLibrary" },
  { label: "投资脑图", href: "/mind-map", page: "MindMap" },
  { label: "模拟演练", href: "/simulation", page: "Simulation" },
];

export const philosophySummary = {
  title: "CAN SLIM 选股体系",
  items: [
    { letter: "C", word: "Current quarterly earnings", meaning: "当季每股收益同比大幅增长（≥25%）" },
    { letter: "A", word: "Annual earnings growth", meaning: "年度每股收益持续增长（过去3年≥25%）" },
    { letter: "N", word: "New product/management/high", meaning: "新产品、新管理层、股价创新高" },
    { letter: "S", word: "Supply and demand", meaning: "流通股本适中，供需关系决定价格" },
    { letter: "L", word: "Leader or laggard", meaning: "只做行业龙头，远离跟风股" },
    { letter: "I", word: "Institutional sponsorship", meaning: "机构投资者持续增持" },
    { letter: "M", word: "Market direction", meaning: "顺应市场大势，不做逆势交易" },
  ],
};

export const homeFeatures = [
  {
    icon: "TrendingUp",
    title: "投资理念",
    desc: "深入解读 CAN SLIM 七要素，理解欧奈尔选股的核心逻辑",
    href: "/philosophy",
  },
  {
    icon: "RefreshCw",
    title: "每日复盘",
    desc: "跟踪市场行情，运用 CAN SLIM 框架复盘当日强势股",
    href: "/daily-review",
  },
  {
    icon: "PieChart",
    title: "仓位管理",
    desc: "基于风险平价与欧奈尔式止损规则的仓位计算模型",
    href: "/position-sizing",
  },
  {
    icon: "Brain",
    title: "交易心理",
    desc: "识别并克服交易中的认知偏差，建立纪律性心态",
    href: "/trading-psychology",
  },
  {
    icon: "CreditCard",
    title: "知识卡片",
    desc: "提炼核心概念为可复习的知识卡片，方便随时查阅",
    href: "/knowledge-cards",
  },
  {
    icon: "FolderOpen",
    title: "案例库",
    desc: "历史牛股复盘，用 CAN SLIM 框架拆解涨跌逻辑",
    href: "/case-library",
  },
  {
    icon: "GitBranch",
    title: "投资脑图",
    desc: "可视化呈现投资体系的全景知识结构图",
    href: "/mind-map",
  },
  {
    icon: "PlayCircle",
    title: "模拟演练",
    desc: "在模拟环境中实践选股、择时与仓位决策",
    href: "/simulation",
  },
];

export const marketStats = [
  { label: "上证指数", value: "3,028.36", change: "+0.68%", up: true },
  { label: "沪深300", value: "3,572.45", change: "+0.82%", up: true },
  { label: "创业板指", value: "1,789.56", change: "-0.21%", up: false },
  { label: "两市成交额", value: "8,956亿", change: "+12.3%", up: true },
];

export const dailyReviewHighlights = [
  {
    title: "市场情绪回暖，科技板块领涨",
    summary: "今日市场在连续调整后迎来反弹，半导体、AI算力方向资金流入明显。",
    date: "2026-06-11",
    tags: ["市场情绪", "科技", "反弹"],
  },
  {
    title: "欧奈尔突破形态筛选结果",
    summary: "今日有7只个股形成杯柄突破形态，其中2只符合 CAN SLIM 全要素标准。",
    date: "2026-06-11",
    tags: ["杯柄形态", "突破", "选股"],
  },
];

export const knowledgeCardPreview = [
  { title: "杯柄形态", category: "技术形态", summary: "持续数周的杯形整理后出现2-3周的柄部回调，突破柄部高点时为买入点。" },
  { title: "EPS 评级", category: "基本面", summary: "欧奈尔将个股过去2年的EPS增长率按百分位排名，仅选90分以上的股票。" },
  { title: "RS 线", category: "技术分析", summary: "相对强度线，将个股价格表现与标普500比较，RS线向上突破为强势信号。" },
];

export const casePreview = [
  { name: "宁德时代 (300750)", period: "2020-2021", return: "+380%", key: "C-L-I 三要素共振" },
  { name: "东方财富 (300059)", period: "2019-2020", return: "+220%", key: "M 因子大市配合 + L 龙头地位" },
  { name: "阳光电源 (300274)", period: "2020-2021", return: "+800%", key: "N 新能源革命 + A 业绩爆发" },
];