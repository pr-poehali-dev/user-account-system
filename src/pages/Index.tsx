import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSitterFilter, setSelectedSitterFilter] = useState('all');

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

  const sitters = [
    {
      id: 1,
      name: 'Иванова Мария Петровна',
      phone: '+7 (901) 234-56-78',
      district: 'Центральный',
      experience: 5,
      status: 'Активна',
      education: 'Высшее медицинское',
      workingHours: 180,
      loading: '90%'
    },
    {
      id: 2,
      name: 'Петрова Анна Сергеевна',
      phone: '+7 (902) 345-67-89',
      district: 'Северный',
      experience: 3,
      status: 'На выезде',
      education: 'Среднее-профессиональное',
      workingHours: 156,
      loading: '75%'
    },
    {
      id: 3,
      name: 'Сидорова Елена Владимировна',
      phone: '+7 (903) 456-78-90',
      district: 'Южный',
      experience: 7,
      status: 'Активна',
      education: 'Высшее медицинское',
      workingHours: 192,
      loading: '95%'
    }
  ];

  const schedule = [
    { client: 'Козлов А.И.', sitter: 'Иванова М.П.', time: '8:00-20:00', status: 'confirmed', cost: '₽ 4,800' },
    { client: 'Морозова Л.С.', sitter: 'Петрова А.С.', time: '20:00-8:00', status: 'pending', cost: '₽ 4,200' },
    { client: 'Волков В.М.', sitter: 'Сидорова Е.В.', time: '24ч', status: 'confirmed', cost: '₽ 6,000' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активна': return 'bg-green-100 text-green-800';
      case 'На выезде': return 'bg-blue-100 text-blue-800';
      case 'Неактивна': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScheduleStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Heart" className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CareManager</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Settings" className="h-4 w-4 mr-2" />
              Настройки
            </Button>
            <div className="flex items-center space-x-2">
              <Icon name="User" className="h-6 w-6 text-gray-600" />
              <span className="text-sm font-medium">Администратор</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="Home" className="h-4 w-4" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="sitters" className="flex items-center gap-2">
              <Icon name="Users" className="h-4 w-4" />
              База сиделок
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Icon name="Calendar" className="h-4 w-4" />
              График
            </TabsTrigger>
            <TabsTrigger value="finances" className="flex items-center gap-2">
              <Icon name="DollarSign" className="h-4 w-4" />
              Финансы
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
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
            </TabsContent>

            {/* Sitters Tab */}
            <TabsContent value="sitters" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">База сиделок</h2>
                  <p className="text-gray-600">Управление персоналом и информацией о сотрудниках</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Plus" className="h-4 w-4 mr-2" />
                      Добавить сиделку
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Добавить новую сиделку</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">ФИО</Label>
                        <Input id="name" placeholder="Введите полное имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (900) 000-00-00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="district">Район</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите район" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="central">Центральный</SelectItem>
                            <SelectItem value="north">Северный</SelectItem>
                            <SelectItem value="south">Южный</SelectItem>
                            <SelectItem value="east">Восточный</SelectItem>
                            <SelectItem value="west">Западный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Опыт работы (лет)</Label>
                        <Input id="experience" type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="education">Образование</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите образование" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="higher-med">Высшее медицинское</SelectItem>
                            <SelectItem value="secondary-prof">Среднее-профессиональное</SelectItem>
                            <SelectItem value="secondary">Среднее</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="notes">Примечания</Label>
                        <Textarea id="notes" placeholder="Дополнительная информация" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Отмена</Button>
                      <Button>Сохранить</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Filters */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-4 items-end">
                    <div className="space-y-1">
                      <Label htmlFor="filter-status">Статус</Label>
                      <Select value={selectedSitterFilter} onValueChange={setSelectedSitterFilter}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Все статусы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все статусы</SelectItem>
                          <SelectItem value="active">Активные</SelectItem>
                          <SelectItem value="busy">На выезде</SelectItem>
                          <SelectItem value="inactive">Неактивные</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="filter-district">Район</Label>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Все районы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все районы</SelectItem>
                          <SelectItem value="central">Центральный</SelectItem>
                          <SelectItem value="north">Северный</SelectItem>
                          <SelectItem value="south">Южный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="search">Поиск</Label>
                      <Input id="search" placeholder="Поиск по имени или телефону" className="w-[250px]" />
                    </div>
                    <Button variant="outline">
                      <Icon name="Filter" className="h-4 w-4 mr-2" />
                      Применить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sitters Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Список сиделок ({sitters.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ФИО</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Район</TableHead>
                        <TableHead>Опыт</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Образование</TableHead>
                        <TableHead>Часы</TableHead>
                        <TableHead>Загрузка</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sitters.map((sitter) => (
                        <TableRow key={sitter.id}>
                          <TableCell className="font-medium">{sitter.name}</TableCell>
                          <TableCell>{sitter.phone}</TableCell>
                          <TableCell>{sitter.district}</TableCell>
                          <TableCell>{sitter.experience} лет</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getStatusColor(sitter.status)}>
                              {sitter.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">{sitter.education}</TableCell>
                          <TableCell>{sitter.workingHours}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="h-2 w-16 bg-gray-200 rounded">
                                <div className="h-2 bg-blue-600 rounded" style={{ width: sitter.loading }}></div>
                              </div>
                              <span className="text-sm">{sitter.loading}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Icon name="Edit" className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Icon name="Eye" className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
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
            </TabsContent>

            {/* Finances Tab */}
            <TabsContent value="finances" className="space-y-6">
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
            </TabsContent>
          </div>
        </Tabs>
      </nav>
    </div>
  );
};

export default Index;