const TableRow = ({ pro, className }) => {
  return (
    <tr className={`bg-white border-b ${className}`}>
      <th scope='row' className='px-6 py-4 font-medium text-secondary w-1/5'>
        {pro.kota}
      </th>
      <td className='px-6 py-4 w-1/5'>{pro.kasus}</td>
      <td className='px-6 py-4 w-1/5'>{pro.sembuh}</td>
      <td className='px-6 py-4 w-1/5'>{pro.dirawat}</td>
      <td className='px-6 py-4 w-1/5'>{pro.meninggal}</td>
    </tr>
  );
};

export default TableRow;
