import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface SittersTabProps {
  selectedSitterFilter: string;
  setSelectedSitterFilter: (value: string) => void;
}

const SittersTab: React.FC<SittersTabProps> = ({ selectedSitterFilter, setSelectedSitterFilter }) => {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активна': return 'bg-green-100 text-green-800';
      case 'На выезде': return 'bg-blue-100 text-blue-800';
      case 'Неактивна': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default SittersTab;