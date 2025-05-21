import EditableTable from '@/components/edit-table';

const Test = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      editable: true,
    },
  ];

  const initialData = [
    { key: '1', name: 'John Doe', age: '32', address: 'New York' },
    { key: '2', name: 'Jane Smith', age: '28', address: 'London' },
  ];

  const handleDataChange = (updatedData) => {
    console.log('Updated Table Data:', updatedData);
  };

  return (
    <div style={{ padding: 24 }}>
      <EditableTable
        columns={columns}
        dataSource={initialData}
        onChange={handleDataChange}
      />
    </div>
  );
};

export default Test;
