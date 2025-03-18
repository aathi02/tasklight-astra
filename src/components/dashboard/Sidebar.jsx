
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Users,
  BarChart2,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: CheckSquare, label: 'Tasks', href: '/dashboard/tasks' },
  { icon: Calendar, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: Users, label: 'Team', href: '/dashboard/team' },
  { icon: BarChart2, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

const Sidebar = ({ 
  userName = 'John Doe',
  userRole = 'Project Manager',
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={toggleMobileSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "h-screen fixed inset-y-0 left-0 z-50 bg-background border-r flex flex-col transition-all duration-300 ease-in-out",
          collapsed ? "w-[70px]" : "w-[240px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className={cn(
          "flex items-center h-14 px-4 border-b",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <Link to="/dashboard" className="font-semibold text-lg flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">PM</span>
              </div>
              <span>Taskflow</span>
            </Link>
          )}

          {collapsed && (
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xs">PM</span>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hidden md:flex"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Menu items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;
              
              return (
                <TooltipProvider key={item.href} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                          collapsed && "justify-center"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                        {!collapsed && <span>{item.label}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </nav>
        </div>

        {/* User profile */}
        <div className={cn(
          "border-t py-3 px-3",
          collapsed ? "items-center justify-center" : "px-4"
        )}>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={cn(
                  "flex items-center",
                  collapsed ? "flex-col space-y-2" : "space-x-3"
                )}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {!collapsed && (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{userName}</p>
                      <p className="text-xs text-muted-foreground truncate">{userRole}</p>
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right" className="flex flex-col">
                  <div>{userName}</div>
                  <div className="text-xs text-muted-foreground">{userRole}</div>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          {!collapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2 text-muted-foreground justify-start"
              onClick={() => console.log('Logout clicked')}
            >
              <LogOut className="h-4 w-4 mr-2" /> Log out
            </Button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
