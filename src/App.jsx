import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';
import OrderList from './components/orders/OrderList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');

  return (
    <ThemeProvider>
      <MainLayout currentView={currentView} onNavigate={setCurrentView}>
        {currentView === 'dashboard' ? <Dashboard /> : <OrderList />}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
