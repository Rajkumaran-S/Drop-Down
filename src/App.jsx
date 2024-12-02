import './App.css';

const menuData = [
  { label: '➔ Home' },
  {
    label: '➥ Degree',
    submenu: [{ label: "➔ Bachelor's Degree" }, { label: "➔ Master's Degree" }],
  },
  {
    label: '➥ Diploma',
    submenu: [
      { label: '➔ Diploma in Engineering' },
      { label: '➔ Diploma in Computer Science' },
      { label: '➔ Diploma in Frenches' },
      {
        label: '➥ Diploma in German',
        submenu: [
          {
            label: '➔ 3 Years',
          },
          {
            label: '➥ Full Time',
            submenu: [
              {
                label: '➔ 9.00 AM to 6.00 PM',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '➥ Certification',
    submenu: [
      { label: '➔ Certified Ethical Hacker' },
      { label: '➔ Certified Scrum Master' },
    ],
  },
];

function App() {
  const toggleSubMenu = (e) => {
    e.stopPropagation();

    let submenu = e.target.querySelector('ul');

    if (!submenu) return;

    if (submenu.style.display === 'none' || !submenu.style.display) {
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu">
        {subMenu.map((subItem, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul>
        {menuData.map((item, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {item.label}
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
