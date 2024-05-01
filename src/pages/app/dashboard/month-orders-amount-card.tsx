import { ArrowUpRight, Utensils } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Orders</CardTitle>
        <CardDescription>Orders for the current month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Utensils size={24} />
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              200
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowUpRight size={18} />
            <span className="text-sm text-green-500">+10%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-muted-foreground"></span>
      </CardFooter>
    </Card>
  )
}
