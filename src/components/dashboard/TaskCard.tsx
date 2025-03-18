
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

type Priority = 'low' | 'medium' | 'high';
type Status = 'pending' | 'in-progress' | 'completed';

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
  progress: number;
  assignee: {
    name: string;
    avatar?: string;
    initials: string;
  };
}

const priorityConfig = {
  low: { color: 'bg-green-500/10 text-green-500', icon: null },
  medium: { color: 'bg-amber-500/10 text-amber-500', icon: null },
  high: { color: 'bg-red-500/10 text-red-500', icon: <AlertCircle className="h-4 w-4 mr-1" /> },
};

const statusConfig = {
  'pending': { color: 'bg-slate-500/10 text-slate-500', icon: <Clock className="h-4 w-4 mr-1" /> },
  'in-progress': { color: 'bg-blue-500/10 text-blue-500', icon: <Clock className="h-4 w-4 mr-1" /> },
  'completed': { color: 'bg-green-500/10 text-green-500', icon: <CheckCircle className="h-4 w-4 mr-1" /> },
};

const TaskCard = ({
  title,
  description,
  dueDate,
  priority,
  status,
  progress,
  assignee,
}: TaskCardProps) => {
  return (
    <Card className="glass-card overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <h3 className="font-medium text-base leading-tight">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className={cn(priorityConfig[priority].color)}>
            {priorityConfig[priority].icon}
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
          
          <Badge variant="outline" className={cn(statusConfig[status].color)}>
            {statusConfig[status].icon}
            {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
      
      <CardFooter className="px-5 py-3 border-t flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={assignee.avatar} />
            <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{assignee.name}</span>
        </div>
        
        <span className="text-xs text-muted-foreground">
          Due {dueDate}
        </span>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
