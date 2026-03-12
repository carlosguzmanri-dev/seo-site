import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { name: string; page: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const navigate = useNavigate();

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
      <ol
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center space-x-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight
                size={16}
                className="text-gray-400 mx-2"
                aria-hidden="true"
              />
            )}
            {index === items.length - 1 ? (
              <span
                className="text-gray-900 font-medium"
                itemProp="name"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <button
                onClick={() => navigate(`/${item.page}`)}
                className="text-blue-600 hover:text-blue-700 hover:underline"
                itemProp="name"
              >
                {item.name}
              </button>
            )}
            <meta itemProp="position" content={`${index + 1}`} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
