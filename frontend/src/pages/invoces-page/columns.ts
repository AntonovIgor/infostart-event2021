import dayjs from "dayjs";

export const columns = [
  {
    title: 'Дата',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (textDate: string) => dayjs(textDate).format('DD.MM.YYYY')
  },
  { title: 'Номер', dataIndex: 'invoice', key: 'invoice' },
  { title: 'Сумма', dataIndex: 'sum', key: 'sum'},
  { title: 'Продавец', dataIndex: 'seller', key: 'seller'},
];
