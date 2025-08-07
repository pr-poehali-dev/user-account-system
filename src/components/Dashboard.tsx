import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const stats = [
    {
      title: 'Всего сиделок',
      value: '127',
      change: '+12%',
      trend: 'up',
      icon: 'Users'
    },
    {
      title: 'Активных заказов',
      value: '43',
      change: '+8%',
      trend: 'up',
      icon: 'Calendar'
    },
    {
      title: 'Доход за месяц',
      value: '₽ 2,840,000',
      change: '+23%',
      trend: 'up',
      icon: 'TrendingUp'
    },
    {
      title: 'Средняя загрузка',
      value: '87%',
      change: '-3%',
      trend: 'down',
      icon: 'Activity'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Обзор системы</h2>
        <p className="text-gray-600">Статистика и основные показатели работы</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} от прошлого месяца
                  </p>
                </div>
                <Icon name={stat.icon as any} className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
          <CardDescription>Часто используемые операции</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Icon name="UserPlus" className="h-6 w-6" />
              <span>Добавить сиделку</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Icon name="Calendar" className="h-6 w-6" />
              <span>Создать выезд</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Icon name="FileText" className="h-6 w-6" />
              <span>Отчеты</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;