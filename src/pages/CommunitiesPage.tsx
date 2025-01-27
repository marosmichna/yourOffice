import { Table, TableBody, TableHead, TableWrapper, Td, Th, Tr } from "@/components/ui/Table";

const CommunitiesPage = () => {
  return (
    <div className="p-2">
          <TableWrapper className="max-h-[400px]"> {/* Výška wrapperu pre vertikálne skrolovanie */}
        <Table>
            <TableHead>
                <Tr>
                    <Th className="border-2 border-blue-500">Header 1</Th>
                    <Th className="border-2 border-blue-500">Header 2</Th>
                    <Th className="border-2 border-blue-500">Header 3</Th>
                    <Th className="border-2 border-blue-500">Header 4</Th>
                    <Th className="border-2 border-blue-500">Header 5</Th>
                    <Th className="border-2 border-blue-500">Header 6</Th>
                    <Th className="border-2 border-blue-500">Header 7</Th>
                    <Th className="border-2 border-blue-500">Header 8</Th>
                </Tr>
            </TableHead>
            <TableBody>
                {/* Riadky s dostatočným počtom buniek na testovanie horizontálneho skrolovania */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <Tr key={i}>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 1</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 2</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 3</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 4</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 5</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 6</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 7</Td>
                        <Td className="border-2 border-black">Row {i + 1}, Cell 8</Td>
                    </Tr>
                ))}
            </TableBody>
        </Table>
    </TableWrapper>
    </div>
  )
}

export default CommunitiesPage;
