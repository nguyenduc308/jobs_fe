import {Category} from "@/interfaces/Category";

export interface CategoriesInnerProps {
    categories: Category[];
}

const CategoriesInner: React.FC<CategoriesInnerProps> = ({categories}) => {
    return <ul className="flex space-x-3 flex-wrap">
        {categories.map((category) => {
           return <li key={category.id}>
               <a href={category.slug} className="rounded-md block bg-gray-100 gray-dark inline-block pt-1 pb-1 pl-2 pr-2 font-small font-medium">
                   {category.name}
               </a>
           </li>
        })}
    </ul>
}

export default CategoriesInner;
