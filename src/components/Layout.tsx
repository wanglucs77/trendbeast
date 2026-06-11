import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/site";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-sm shadow-slate-200/50 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
              CS
            </span>
            <span className="hidden sm:inline">CAN SLIM 投研社</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="切换菜单"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white">
                  CS
                </span>
                CAN SLIM 投研社
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                以欧奈尔 CAN SLIM 体系为纲，构建系统化投资框架。仅供学习研究，不构成投资建议。
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900">学习模块</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/philosophy" className="hover:text-slate-900 transition-colors">投资理念</Link></li>
                <li><Link to="/daily-review" className="hover:text-slate-900 transition-colors">每日复盘</Link></li>
                <li><Link to="/position-sizing" className="hover:text-slate-900 transition-colors">仓位管理</Link></li>
                <li><Link to="/trading-psychology" className="hover:text-slate-900 transition-colors">交易心理</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900">资源中心</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/knowledge-cards" className="hover:text-slate-900 transition-colors">知识卡片</Link></li>
                <li><Link to="/case-library" className="hover:text-slate-900 transition-colors">案例库</Link></li>
                <li><Link to="/mind-map" className="hover:text-slate-900 transition-colors">投资脑图</Link></li>
                <li><Link to="/simulation" className="hover:text-slate-900 transition-colors">模拟演练</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-900">关于</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><span className="cursor-default">本网站内容基于威廉·欧奈尔《笑傲股市》及相关公开资料整理</span></li>
                <li className="mt-2 text-xs text-slate-400">© 2026 CAN SLIM 投研社</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}