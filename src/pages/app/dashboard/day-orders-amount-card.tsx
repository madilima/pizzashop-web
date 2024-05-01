import { ArrowDown, Utensils } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Orders</CardTitle>
        <CardDescription>Orders for the current day</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Utensils size={24} />
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              10
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowDown size={18} />
            <span className="text-sm text-rose-500"> -3%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-muted-foreground"></span>
      </CardFooter>
    </Card>
  )
}
