import React from 'react'
import { Card, MainForGraph, OrderContainer } from './style'
import TripExpensesChart from './graphs/TripChart'

export default function Dashboard() {
  return (
      <div>
          <MainForGraph>
              <Card><TripExpensesChart/></Card>
              <Card><TripExpensesChart/></Card>
              <Card><TripExpensesChart/></Card>
              <Card><TripExpensesChart/></Card>
              
          </MainForGraph> 
      <OrderContainer>
              orders
      </OrderContainer>

    </div>
  )
}
