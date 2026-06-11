import { PlayCircle, TrendingUp, TrendingDown, RefreshCw, DollarSign, BarChart3 } from "lucide-react";
import { useState } from "react";

interface Stock {
  code: string;
  name: string;
  price: number;
  rs: number;
  eps: number;
  pattern: string;
  change: number;
}

const initialStocks: Stock[] = [
  { code: "688981", name: "中芯国际", price: 68.50, rs: 95, eps: 88, pattern: "杯柄突破", change: 0 },
  { code: "300750", name: "宁德时代", price: 245.30, rs: 91, eps: 96, pattern: "高紧旗形", change: 0 },
  { code: "002230", name: "科大讯飞", price: 48.20, rs: 89, eps: 82, pattern: "突破", change: 0 },
  { code: "601012", name: "隆基绿能", price: 28.60, rs: 76, eps: 92, pattern: "震荡", change: 0 },
  { code: "300059", name: "东方财富", price: 22.40, rs: 85, eps: 90, pattern: "箱体整理", change: 0 },
  { code: "688111", name: "金山办公", price: 186.50, rs: 82, eps: 87, pattern: "回调", change: 0 },
  { code: "002475", name: "立讯精密", price: 38.70, rs: 78, eps: 85, pattern: "底部企稳", change: 0 },
  { code: "000858", name: "五粮液", price: 158.00, rs: 72, eps: 80, pattern: "下跌趋势", change: 0 },
];

interface Position {
  code: string;
  name: string;
  shares: number;
  buyPrice: number;
  currentPrice: number;
}

export function Simulation() {
  const [stocks] = useState(initialStocks);
  const [cash, setCash] = useState(500000);
  const [positions, setPositions] = useState<Position[]>([]);
  const [log, setLog] = useState<string[]>(["===== 模拟交易系统启动 =====", `初始资金：¥500,000`]);
  const [marketPhase, setMarketPhase] = useState<"up" | "neutral" | "down">("neutral");

  const totalValue = cash + positions.reduce((sum, p) => sum + p.shares * p.currentPrice, 0);
  const invested = positions.reduce((sum, p) => sum + p.shares * p.buyPrice, 0);
  const profitLoss = totalValue - 500000;
  const plPercent = ((totalValue - 500000) / 500000 * 100);

  function buyStock(stock: Stock) {
    const maxPosition = cash * 0.08;
    const shares = Math.floor(maxPosition / stock.price);
    const cost = shares * stock.price;

    if (cost < 100) {
      setLog((prev) => [...prev, `❌ ${stock.name}：资金不足（最低买入 ¥100）`]);
      return;
    }

    const existing = positions.find((p) => p.code === stock.code);
    if (existing) {
      setLog((prev) => [...prev, `⚠️ ${stock.name} 已持仓，请先卖出`]);
      return;
    }

    setPositions((prev) => [
      ...prev,
      { code: stock.code, name: stock.name, shares, buyPrice: stock.price, currentPrice: stock.price },
    ]);
    setCash((prev) => prev - cost);
    setLog((prev) => [...prev, `🟢 买入 ${stock.name} × ${shares}股 @ ¥${stock.price.toFixed(2)} = ¥${cost.toFixed(2)}`]);
  }

  function sellStock(code: string) {
    const pos = positions.find((p) => p.code === code);
    if (!pos) return;
    const value = pos.shares * pos.currentPrice;
    const pl = value - (pos.shares * pos.buyPrice);
    setPositions((prev) => prev.filter((p) => p.code !== code));
    setCash((prev) => prev + value);
    setLog((prev) => [
      ...prev,
      `🔴 卖出 ${pos.name} × ${pos.shares}股 @ ¥${pos.currentPrice.toFixed(2)}` +
        (pl >= 0 ? ` = ¥${value.toFixed(2)} (+¥${pl.toFixed(2)}) ✅` : ` = ¥${value.toFixed(2)} (-¥${pl.toFixed(2)}) ❌`),
    ]);
  }

  function simulateMarket() {
    const phaseChange = Math.random();
    let newPhase: "up" | "neutral" | "down";
    if (phaseChange < 0.35) newPhase = "up";
    else if (phaseChange < 0.65) newPhase = "neutral";
    else newPhase = "down";
    setMarketPhase(newPhase);

    const multiplier = newPhase === "up" ? 1.03 : newPhase === "down" ? 0.97 : 1.0;
    const volatility = 0.02;

    const updatedPrices = stocks.map((s) => {
      const change = (Math.random() - 0.5) * 2 * volatility + (multiplier - 1);
      const newPrice = Math.max(s.price * 0.9, s.price * (1 + change));
      return { ...s, price: Math.round(newPrice * 100) / 100, change: ((newPrice - s.price) / s.price * 100) };
    });

    // 更新持仓中的当前价
    setPositions((prev) =>
      prev.map((p) => {
        const updated = updatedPrices.find((s) => s.code === p.code);
        return { ...p, currentPrice: updated ? updated.price : p.currentPrice };
      })
    );

    // 更新股价表
    setLog((prev) => [
      ...prev,
      `📊 市场模拟更新 — ${newPhase === "up" ? "📈 上涨" : newPhase === "down" ? "📉 下跌" : "➖ 震荡"}`,
    ]);
  }

  function resetSim() {
    setCash(500000);
    setPositions([]);
    setLog(["===== 模拟重置 =====", `初始资金：¥500,000`]);
    setMarketPhase("neutral");
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              模拟演练
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              在模拟环境中实践 CAN SLIM 选股、择时与仓位管理。风险为零，学习无价。
            </p>
          </div>
        </div>
      </section>

      {/* 账户概览 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl bg-slate-900 p-4 text-white">
              <div className="text-xs text-slate-300">总资产</div>
              <div className="mt-1 text-2xl font-bold">¥{totalValue.toLocaleString()}</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500">现金</div>
              <div className="mt-1 text-lg font-bold text-slate-900">¥{cash.toLocaleString()}</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500">持仓市值</div>
              <div className="mt-1 text-lg font-bold text-slate-900">¥{(totalValue - cash).toLocaleString()}</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500">盈亏</div>
              <div className={`mt-1 text-lg font-bold ${profitLoss >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                {profitLoss >= 0 ? "+" : ""}¥{profitLoss.toLocaleString()}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500">收益率</div>
              <div className={`mt-1 text-lg font-bold ${plPercent >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                {plPercent >= 0 ? "+" : ""}{plPercent.toFixed(2)}%
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <BarChart3 className="h-3.5 w-3.5" />
              市场状态：
              <span className={`inline-flex items-center gap-1 font-semibold ${
                marketPhase === "up" ? "text-emerald-600" :
                marketPhase === "down" ? "text-red-600" : "text-amber-600"
              }`}>
                {marketPhase === "up" ? <TrendingUp className="h-3.5 w-3.5" /> :
                 marketPhase === "down" ? <TrendingDown className="h-3.5 w-3.5" /> :
                 <BarChart3 className="h-3.5 w-3.5" />}
                {marketPhase === "up" ? "上升趋势" : marketPhase === "down" ? "下降趋势" : "横盘震荡"}
              </span>
            </span>
            <button
              onClick={simulateMarket}
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-700"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              模拟下一个交易日
            </button>
            <button
              onClick={resetSim}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
            >
              重置
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* 股票池 */}
          <div>
            <h2 className="text-lg font-bold text-slate-900">📋 候选股票池</h2>
            <p className="text-xs text-slate-400 mt-1">点击买入 — 单只仓位上限 8% 总资金</p>
            <div className="mt-4 space-y-2">
              {stocks.map((stock) => {
                const change = stock.change || (Math.random() - 0.5) * 4;
                return (
                  <div
                    key={stock.code}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-slate-900">{stock.name}</span>
                        <span className="text-xs text-slate-400">{stock.code}</span>
                        <span className={`text-xs font-medium ${change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                          {change >= 0 ? "+" : ""}{change.toFixed(2)}%
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-slate-400">
                        <span>RS {stock.rs}</span>
                        <span>EPS {stock.eps}</span>
                        <span>{stock.pattern}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-900">¥{stock.price.toFixed(2)}</span>
                      <button
                        onClick={() => buyStock(stock)}
                        className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100"
                      >
                        买入
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 右侧面板 */}
          <div className="space-y-6">
            {/* 持仓 */}
            <div>
              <h2 className="text-lg font-bold text-slate-900">📦 当前持仓</h2>
              {positions.length === 0 ? (
                <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                  尚无持仓，选一只股票开始模拟交易
                </div>
              ) : (
                <div className="mt-4 space-y-2">
                  {positions.map((pos) => {
                    const pl = (pos.currentPrice - pos.buyPrice) * pos.shares;
                    const plPct = ((pos.currentPrice - pos.buyPrice) / pos.buyPrice * 100);
                    return (
                      <div key={pos.code} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-slate-900">{pos.name}</span>
                          <button
                            onClick={() => sellStock(pos.code)}
                            className="rounded-lg bg-red-50 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-100"
                          >
                            卖出
                          </button>
                        </div>
                        <div className="mt-2 text-xs text-slate-400">
                          {pos.shares}股 @ ¥{pos.buyPrice.toFixed(2)}
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">¥{pos.currentPrice.toFixed(2)}</span>
                          <span className={`text-xs font-medium ${pl >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                            {pl >= 0 ? "+" : ""}¥{pl.toFixed(0)} ({plPct >= 0 ? "+" : ""}{plPct.toFixed(2)}%)
                          </span>
                        </div>
                        {plPct <= -7 && (
                          <div className="mt-2 rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600">
                            ⚠️ 已达止损线（-7%~-8%），建议出局
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 交易日志 */}
            <div>
              <h2 className="text-lg font-bold text-slate-900">📝 交易日志</h2>
              <div className="mt-4 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
                {log.map((entry, i) => (
                  <div key={i} className="py-0.5">{entry}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">🛈 模拟演练说明</h3>
            <div className="mt-4 grid gap-4 text-sm text-slate-500 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <span className="font-medium text-slate-900">1. 选股</span>
                <p className="mt-1">从候选池中挑选符合 CAN SLIM 标准的股票。关注 RS ≥ 80、EPS ≥ 90 的标的。</p>
              </div>
              <div>
                <span className="font-medium text-slate-900">2. 买入</span>
                <p className="mt-1">每只股票初始仓位上限为总资金的 8%。在确认突破形态后执行买入。</p>
              </div>
              <div>
                <span className="font-medium text-slate-900">3. 持仓管理</span>
                <p className="mt-1">监控持仓盈亏，严格执行 7-8% 止损。盈利超过 20% 考虑分批止盈。</p>
              </div>
              <div>
                <span className="font-medium text-slate-900">4. M 因子</span>
                <p className="mt-1">关注市场状态变化。上升趋势可加仓，下降趋势应减仓。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}