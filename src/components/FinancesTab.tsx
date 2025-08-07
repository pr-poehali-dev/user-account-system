import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FinancesTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Движение денежных средств</h2>
        <p className="text-gray-600">Учет доходов и расходов системы</p>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Доходы за месяц</p>
                <p className="text-2xl font-bold text-green-600">₽ 2,840,000</p>
              </div>
              <Icon name="TrendingUp" className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Расходы на зарплаты</p>
                <p className="text-2xl font-bold text-blue-600">₽ 1,980,000</p>
              </div>
              <Icon name="Users" className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Маржа</p>
                <p className="text-2xl font-bold text-purple-600">₽ 860,000</p>
              </div>
              <Icon name="Percent" className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Последние операции</CardTitle>
          <CardDescription>Учет финансовых операций и платежей</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: '001', date: '08.01.2024', client: 'Козлов А.И.', amount: '₽ 4,800', type: 'Банк', status: 'Выполнено' },
              { id: '002', date: '08.01.2024', client: 'Морозова Л.С.', amount: '₽ 4,200', type: 'Наличные', status: 'Ожидает' },
              { id: '003', date: '07.01.2024', client: 'Волков В.М.', amount: '₽ 6,000', type: 'Робокасса', status: 'Выполнено' }
            ].map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="DollarSign" className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.client}</p>
                    <p className="text-sm text-gray-600">№{transaction.id} • {transaction.date}</p>
                    <p className="text-sm text-gray-600">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{transaction.amount}</p>
                  <Badge variant={transaction.status === 'Выполнено' ? 'default' : 'secondary'}>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancesTab;