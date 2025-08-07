import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ScheduleTab = () => {
  const schedule = [
    { client: 'Козлов А.И.', sitter: 'Иванова М.П.', time: '8:00-20:00', status: 'confirmed', cost: '₽ 4,800' },
    { client: 'Морозова Л.С.', sitter: 'Петрова А.С.', time: '20:00-8:00', status: 'pending', cost: '₽ 4,200' },
    { client: 'Волков В.М.', sitter: 'Сидорова Е.В.', time: '24ч', status: 'confirmed', cost: '₽ 6,000' }
  ];

  const getScheduleStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">График работы сиделок</h2>
        <p className="text-gray-600">Планирование и контроль выездов</p>
      </div>

      {/* Schedule Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Icon name="ChevronLeft" className="h-4 w-4" />
              </Button>
              <span className="font-medium">8 - 14 января 2024</span>
              <Button variant="outline">
                <Icon name="ChevronRight" className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Icon name="Download" className="h-4 w-4 mr-2" />
                Экспорт
              </Button>
              <Button>
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Новый выезд
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Выезды на сегодня</CardTitle>
          <CardDescription>8 января 2024 • 3 активных выезда</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{item.client}</p>
                    <p className="text-sm text-gray-600">Сиделка: {item.sitter}</p>
                    <p className="text-sm text-gray-600">Время: {item.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{item.cost}</p>
                    <Badge variant="secondary" className={getScheduleStatusColor(item.status)}>
                      {item.status === 'confirmed' ? 'Подтверждено' : 'Ожидает'}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Week Calendar View */}
      <Card>
        <CardHeader>
          <CardTitle>Календарный график</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-1 text-sm">
            <div className="p-2 font-medium">Клиент</div>
            {['Пн 8', 'Вт 9', 'Ср 10', 'Чт 11', 'Пт 12', 'Сб 13', 'Вс 14'].map((day) => (
              <div key={day} className="p-2 text-center font-medium bg-gray-50 rounded">{day}</div>
            ))}
            
            <div className="p-2 font-medium">Козлов А.И.</div>
            <div className="p-1 h-16 bg-blue-100 rounded flex flex-col justify-center text-xs">
              <div className="font-medium">Иванова М.П.</div>
              <div>8:00-20:00</div>
              <div>₽4,800</div>
            </div>
            <div className="p-1 h-16 bg-blue-100 rounded flex flex-col justify-center text-xs">
              <div className="font-medium">Иванова М.П.</div>
              <div>8:00-20:00</div>
              <div>₽4,800</div>
            </div>
            <div className="p-1 h-16 border-2 border-dashed border-gray-300 rounded"></div>
            <div className="p-1 h-16 border-2 border-dashed border-gray-300 rounded"></div>
            <div className="p-1 h-16 bg-green-100 rounded flex flex-col justify-center text-xs">
              <div className="font-medium">Петрова А.С.</div>
              <div>8:00-20:00</div>
              <div>₽4,800</div>
            </div>
            <div className="p-1 h-16 border-2 border-dashed border-gray-300 rounded"></div>
            <div className="p-1 h-16 border-2 border-dashed border-gray-300 rounded"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleTab;