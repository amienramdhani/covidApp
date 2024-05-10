const TableRow = (props) => {
  const { pro } = props;
  return (
    <tbody>
      <tr className='bg-white border-b'>
        <th scope='row' className='px-6 py-4 font-medium text-secondary'>
          {pro.kota}
        </th>
        <td className='px-6 py-4'>{pro.kasus}</td>
        <td className='px-6 py-4'>{pro.sembuh}</td>
        <td className='px-6 py-4'>{pro.meninggal}</td>
        <td className='px-6 py-4'>{pro.dirawat}</td>
      </tr>
    </tbody>
  );
};

export default TableRow;
