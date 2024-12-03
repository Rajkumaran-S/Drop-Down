import './App.css';

const menuData = [
{ label: '➔ TN Schools' },
{
label: '➥ Chennai',
submenu: [{ label: "➔ Mother Mary Metric" }, { label: "➔ John Britto" }],
},
{
label: '➥ Salem',
submenu: [
{ label: '➔ St Xavier' },
{ label: '➔ Little Flower' },
{ label: '➔ Notri Dame' },
{
label: '➥ St Loyola',
submenu: [
{
label: '➔ 1st to 10th std',
},
{
label: '➥ CBSC & Metric',
submenu: [
{
label: '➔ 9.00 AM to 4:30 PM',
},
],
},
],
},
],
},
{
label: '➥ Coiambatur',
submenu: [
{ label: '➔ SRK Metric' },
{ label: '➔ SRV Metric' },
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
