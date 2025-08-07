import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;