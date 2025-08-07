import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import SittersTab from '@/components/SittersTab';
import ScheduleTab from '@/components/ScheduleTab';
import FinancesTab from '@/components/FinancesTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSitterFilter, setSelectedSitterFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>

            <TabsContent value="sitters">
              <SittersTab 
                selectedSitterFilter={selectedSitterFilter}
                setSelectedSitterFilter={setSelectedSitterFilter}
              />
            </TabsContent>

            <TabsContent value="schedule">
              <ScheduleTab />
            </TabsContent>

            <TabsContent value="finances">
              <FinancesTab />
            </TabsContent>
          </div>
        </Tabs>
      </nav>
    </div>
  );
};

export default Index;