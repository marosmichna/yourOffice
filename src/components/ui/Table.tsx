import { cn } from "@/utils/cn";

// TableWrapper: wrapper pre tabuľku, ktorý umožní skrolovanie na oboch osiach
type TableWrapperProps = React.HTMLAttributes<HTMLDivElement>;

const TableWrapper = ({ className, children, ...props }: TableWrapperProps) => {
    return (
        <div
            className={cn(
                "overflow-x-auto overflow-y-auto", // Povolenie skrolovania na oboch osiach
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

TableWrapper.displayName = "TableWraper";

// Table

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const Table = ({ className, children, ...props }: TableProps) => {
    return (
        <table
            className={cn(
                "min-w-full",
                className
            )}
            {...props}
        >
            {children}
        </table>
    );
};

Table.displayName = "Table";

// Table Head

type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableHead = ({ className, children, ...props }: TableHeadProps) => {
    return (
        <thead
            className={cn(
                "",
                className
            )}
            {...props}
        >
            {children}
        </thead>
    );
};

TableHead.displayName = "TableHead";

// Tr

type TrProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const Tr = ({ className, children }: TrProps) => {
    return (
        <tr
            className={cn(
                "",
                className
            )}
        >
            {children}
        </tr>
    );
};

Tr.displayName = "Tr";

// Th

type ThProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const Th = ({ className, children }: ThProps) => {
    return (
        <th
            className={cn(
                "border-2 border-blue-500",
                className
            )}
        >
            {children}
        </th>
    );
};

Th.displayName = "Th";

// Table Body

type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableBody = ({ className, children, ...props }: TableBodyProps) => {
    return (
        <tbody
            className={cn(
                "max-h-[200px] overflow-y-auto",
                className
            )}
            {...props}
        >
            {children}
        </tbody>
    );
};

TableBody.displayName = "TableBody";

type TdProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const Td = ({ className, children }: TdProps) => {
    return (
        <td
            className={cn(
                "border-2 border-black",
                className
            )}
        >
            {children}
        </td>
    );
};

Td.displayName = "Td";

export {TableWrapper, Table, TableHead, Tr, Th, TableBody, Td}