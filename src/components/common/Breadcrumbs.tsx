import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumbs" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <li>
          <Link
            to="/"
            className="text-slate-400 hover:text-slate-700 transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <span className="text-slate-300" aria-hidden="true">
                /
              </span>
              <li>
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-slate-800 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
