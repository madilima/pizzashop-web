import { ArrowUpRight, ShoppingBag } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Canceled Orders</CardTitle>
        <CardDescription>Canceled orders for the current month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} />
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              10
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowUpRight size={18} />
            <span className="text-sm text-emerald-500">-1%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-muted-foreground"></span>
      </CardFooter>
    </Card>
  )
}
