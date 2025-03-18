
import React, { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/dashboard/Sidebar';
import TaskCard from '@/components/dashboard/TaskCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  PlusCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  Bell
} from 'lucide-react';
import { PRIORITIES, STATUSES } from '@/types';

// Sample data for tasks
const tasks = [
  {
    id: 1,
    title: 'Design System Updates',
    description: 'Update the design system components to match the new brand guidelines',
    dueDate: 'Oct 15',
    priority: PRIORITIES.HIGH,
    status: STATUSES.IN_PROGRESS,
    progress: 60,
    assignee: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
      initials: 'SC'
    }
  },
  {
    id: 2,
    title: 'API Integration',
    description: 'Integrate the payment gateway API with the checkout flow',
    dueDate: 'Oct 20',
    priority: PRIORITIES.MEDIUM,
    status: STATUSES.PENDING,
    progress: 0,
    assignee: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
      initials: 'MJ'
    }
  },
  {
    id: 3,
    title: 'User Testing',
    description: 'Conduct user testing sessions for the new dashboard interface',
    dueDate: 'Oct 12',
    priority: PRIORITIES.LOW,
    status: STATUSES.COMPLETED,
    progress: 100,
    assignee: {
      name: 'Alex Wong',
      avatar: 'https://i.pravatar.cc/150?img=3',
      initials: 'AW'
    }
  },
  {
    id: 4,
    title: 'Documentation Update',
    description: 'Update the API documentation with the new endpoints',
    dueDate: 'Oct 18',
    priority: PRIORITIES.MEDIUM,
    status: STATUSES.IN_PROGRESS,
    progress: 30,
    assignee: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=4',
      initials: 'JD'
    }
  },
];

const Dashboard = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast when dashboard loads
    toast({
      title: 'Welcome back!',
      description: 'You have 3 tasks due this week.',
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <div className="flex-1 p-8 ml-[70px] md:ml-[240px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
              <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            </div>
          </header>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">+8%</span> from last week
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-amber-500">50%</span> completion rate
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-blue-500">+2</span> new this month
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Tasks Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">My Tasks</h2>
              <Button variant="ghost" size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  status={task.status}
                  progress={task.progress}
                  assignee={task.assignee}
                />
              ))}
            </div>
          </div>
          
          {/* Activity Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Alex Wong</span> completed <span className="font-medium">User Testing</span>
                      </p>
                      <span className="text-xs text-muted-foreground">Today, 10:30 AM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Sarah Chen</span> updated progress on <span className="font-medium">Design System Updates</span>
                      </p>
                      <span className="text-xs text-muted-foreground">Today, 9:15 AM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Mike Johnson</span> was assigned to <span className="font-medium">API Integration</span>
                      </p>
                      <span className="text-xs text-muted-foreground">Yesterday, 4:30 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
