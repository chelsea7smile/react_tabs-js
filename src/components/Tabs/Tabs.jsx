export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const clickHandler = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => clickHandler(tab.id)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div data-cy="TabContent">{selectedTab.content}</div>
    </div>
  );
};