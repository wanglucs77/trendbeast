import { GitBranch, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type NodeId = string;

interface MindNode {
  id: NodeId;
  label: string;
  children: MindNode[];
  color?: string;
}

const mindMapTree: MindNode = {
  id: "root",
  label: "CAN SLIM 投资体系",
  color: "bg-slate-900",
  children: [
    {
      id: "philosophy",
      label: "投资理念",
      color: "bg-blue-600",
      children: [
        { id: "c-factor", label: "C 当季业绩", children: [] },
        { id: "a-factor", label: "A 年度业绩", children: [] },
        { id: "n-factor", label: "N 新产品/新高", children: [] },
        { id: "s-factor", label: "S 供需关系", children: [] },
        { id: "l-factor", label: "L 行业龙头", children: [] },
        { id: "i-factor", label: "I 机构持仓", children: [] },
        { id: "m-factor", label: "M 市场方向", children: [] },
      ],
    },
    {
      id: "stock-picking",
      label: "选股系统",
      color: "bg-emerald-600",
      children: [
        { id: "eps-rating", label: "EPS 评级 ≥ 90", children: [] },
        { id: "rs-rating", label: "RS 评级 ≥ 80", children: [] },
        { id: "sector-leader", label: "行业龙头筛选", children: [] },
        { id: "institutional", label: "机构增持确认", children: [] },
        { id: "screen", label: "每日筛选清单", children: [] },
      ],
    },
    {
      id: "technical",
      label: "技术分析",
      color: "bg-violet-600",
      children: [
        { id: "cup-handle", label: "杯柄形态", children: [] },
        { id: "flat-base", label: "高紧旗形", children: [] },
        { id: "double-bottom", label: "双底形态", children: [] },
        { id: "volume", label: "成交量分析", children: [] },
        { id: "ma-support", label: "均线系统", children: [] },
      ],
    },
    {
      id: "timing",
      label: "择时与交易",
      color: "bg-amber-600",
      children: [
        { id: "buy-point", label: "突破买入点", children: [] },
        { id: "stop-loss", label: "7-8% 止损", children: [] },
        { id: "take-profit", label: "分批止盈", children: [] },
        { id: "pyramiding", label: "金字塔加仓", children: [] },
        { id: "churning", label: "盘中震荡处理", children: [] },
      ],
    },
    {
      id: "risk-mgmt",
      label: "风险管理",
      color: "bg-red-600",
      children: [
        { id: "position-size", label: "仓位计算", children: [] },
        { id: "max-drawdown", label: "最大回撤 ≤ 15%", children: [] },
        { id: "correlation", label: "组合相关性", children: [] },
        { id: "market-risk", label: "M 因子风险", children: [] },
      ],
    },
    {
      id: "psychology",
      label: "交易心理",
      color: "bg-rose-600",
      children: [
        { id: "bias", label: "认知偏差识别", children: [] },
        { id: "discipline", label: "纪律性训练", children: [] },
        { id: "journal", label: "交易日志", children: [] },
        { id: "meditation", label: "情绪管理", children: [] },
      ],
    },
    {
      id: "practice",
      label: "实战演练",
      color: "bg-cyan-600",
      children: [
        { id: "simulation", label: "模拟交易", children: [] },
        { id: "case-study", label: "案例复盘", children: [] },
        { id: "backtest", label: "策略回测", children: [] },
        { id: "review", label: "每日复盘", children: [] },
      ],
    },
  ],
};

export function MindMap() {
  const [scale, setScale] = useState(1);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggleBranch(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function renderNode(node: MindNode, depth: number): React.ReactNode {
    const hasChildren = node.children.length > 0;
    const isOpen = expanded[node.id] ?? true;

    return (
      <div key={node.id} className="select-none">
        <div className="flex items-center gap-2">
          {hasChildren ? (
            <button
              onClick={() => toggleBranch(node.id)}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 text-xs text-slate-500 hover:bg-slate-100"
            >
              {isOpen ? "−" : "+"}
            </button>
          ) : (
            <span className="w-5" />
          )}
          <span
            className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white ${
              node.color || "bg-slate-700"
            } ${depth === 0 ? "text-sm font-bold px-4 py-2" : ""}`}
          >
            {node.id === "root" && <GitBranch className="mr-1.5 h-3.5 w-3.5" />}
            {node.label}
          </span>
        </div>
        {hasChildren && isOpen && (
          <div className="ml-3 mt-1.5 border-l-2 border-slate-200 pl-4 space-y-1.5">
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              投资脑图
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              CAN SLIM 体系全景知识结构图，可视化呈现各模块之间的逻辑关系
            </p>
          </div>
        </div>
      </section>

      {/* 脑图主体 */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* 控制栏 */}
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-slate-500">
              点击 <strong className="text-slate-900">+/−</strong> 展开或折叠分支
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
                className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
                aria-label="缩小"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-xs text-slate-400">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale((s) => Math.min(1.5, s + 0.1))}
                className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
                aria-label="放大"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={() => setScale(1)}
                className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
                aria-label="重置缩放"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 脑图内容 */}
          <div
            className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            <div className="min-w-[600px]">
              {renderNode(mindMapTree, 0)}
            </div>
          </div>
        </div>
      </section>

      {/* 连接导航 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">按模块学习</h2>
          <p className="mt-2 text-sm text-slate-500">
            每个分支对应网站的一个学习模块，点击进入深入学习
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "投资理念", href: "/philosophy", color: "bg-blue-600", nodes: mindMapTree.children[0].children.map((c) => c.label) },
              { label: "每日复盘", href: "/daily-review", color: "bg-cyan-600", nodes: mindMapTree.children[6].children.slice(3).map((c) => c.label) },
              { label: "仓位管理", href: "/position-sizing", color: "bg-red-600", nodes: mindMapTree.children[4].children.map((c) => c.label) },
              { label: "交易心理", href: "/trading-psychology", color: "bg-rose-600", nodes: mindMapTree.children[5].children.map((c) => c.label) },
              { label: "知识卡片", href: "/knowledge-cards", color: "bg-violet-600", nodes: ["EPS 评级", "RS 线", "杯柄形态", "止损规则"].map((c) => c) },
              { label: "案例库", href: "/case-library", color: "bg-emerald-600", nodes: ["宁德时代", "东方财富", "阳光电源"].map((c) => c) },
            ].map((module) => (
              <Link
                key={module.label}
                to={module.href}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold text-white ${module.color}`}>
                    {module.label.charAt(0)}
                  </span>
                  <h3 className="font-semibold text-slate-900">{module.label}</h3>
                </div>
                <ul className="mt-3 space-y-1">
                  {module.nodes.map((node) => (
                    <li key={node} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      {node}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}