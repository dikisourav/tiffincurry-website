import { useState } from "react";
import { Link } from "react-router-dom";

export default function MegaMenu({ menuData }) {
  const firstKey = Object.keys(menuData)[0];
  const [active, setActive] = useState(firstKey);
  const activeMenu = menuData[active];

  return (
    <div className={`mega-menu ${activeMenu.panel ? "mega-menu-visual" : ""}`}>
      <div className="mega-left">
        {activeMenu.panel ? (
          <div className="mega-left-promo">
            <div className="mega-left-promo-image">
              <img src={activeMenu.panel.image} alt={activeMenu.panel.alt} />
            </div>
            <span>{activeMenu.panel.eyebrow}</span>
            <h3>{activeMenu.panel.title}</h3>
            <p>{activeMenu.panel.desc}</p>
          </div>
        ) : (
          Object.keys(menuData).map((section) => (
            <div
              key={section}
              className={active === section ? "active" : ""}
              onMouseEnter={() => setActive(section)}
            >
              {section}
            </div>
          ))
        )}
      </div>

      <div className="mega-right">
        {activeMenu.type === "logo-list" && (
          <div className="mega-logo-list">
            {activeMenu.items.map((item, index) => {
              const itemContent = (
                <>
                  <div className="mega-icon">{item.icon}</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </>
              );

              return item.url ? (
                <Link key={index} to={item.url} className="mega-logo-item">
                  {itemContent}
                </Link>
              ) : (
                <div key={index} className="mega-logo-item">
                  {itemContent}
                </div>
              );
            })}
          </div>
        )}

        {activeMenu.type === "grouped-list" &&
          activeMenu.groups.map((group, index) => (
            <div key={index} className="mega-group">
              <h5>{group.header}</h5>

              <ul>
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
