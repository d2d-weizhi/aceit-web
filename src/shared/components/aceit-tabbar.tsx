"use client";

interface AceItTabBarProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export function AceItTabBar({ activeTab, onChange }: AceItTabBarProps) {
	return (
    <div className="flex justify-end items-end">
      <button
        className={`aceit-tab ${activeTab === 'Home' && 'active-tab'}`}
        onClick={() => onChange('Home')}
      >
        Home
      </button>
      <button
        className={`aceit-tab ${activeTab === 'Stats' && 'active-tab'}`}
        onClick={() => onChange('Stats')}
      >
        Stats
      </button>
    </div>
  );
}