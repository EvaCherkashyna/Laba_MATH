import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

const Laba3 = () => {
  const [steps, setSteps] = useState<string[]>([])
  const hyperbola = "9x^2 - 25y^2 - 18x - 100y - 316 = 0"
  const simplyfyEquation = () => {
    const stepList: string[] = []

    const a = 9, b = -25, c = -18, d = -100, e = -316

    stepList.push(`Визначаємо коєфіцієнти: А = ${a} B = ${b} C = ${c} D = ${d} E = ${e}`)
    stepList.push(`Групуємо члени:`)
    stepList.push(`9(x^2 - 2x) - 25(y^2 + 4y) - 316 = 0`)
    stepList.push(`Доповнюємо до повного квадрату:`)
    stepList.push(`Для х^2 - 2х додаємо і віднімаємо (2/2)^2 = 1`)
    stepList.push(`Для y^2 + 4y додаємо і віднімаємо (4/2)^2 = 2`)
    stepList.push(`9((x - 1)^2 - 1) - 25((y + 2)^2 - 4) - 316 = 0`)
    stepList.push(`Розкриваємо дужки:`)
    stepList.push(`9(x - 1)^2 - 9 - 25(y + 2)^2 + 100 - 316 = 0`)
    stepList.push(`9(x - 1)^2 - 25(y + 2)^2 - 225 = 0`)
    stepList.push(`Ділимо на 255:`)
    stepList.push(`(x - 1)^2 / 25 - (y + 2)^2 / 9 = 0`)
    stepList.push(`Це рівняння гіперболи: (x -1)^2 / 25 - (y + 2)^2 / 9 = 1`)
    setSteps(stepList)
  }

  return (
    <Box sx={{ p: 3, maxWidth: "800px", margin: "0 auto" }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant='h4' gutterBottom align='center'>
          Спрощення рівняння гіперболи
        </Typography>
        <Typography variant='body1' gutterBottom >
          Статичне рівняння гіперболи:
        </Typography>
        <Typography variant='h6' gutterBottom >
          {hyperbola}
        </Typography>
        <Button variant='contained' fullWidth sx={{ mt: 2 }} color='primary' onClick={steps.length <= 0 ? simplyfyEquation : () => setSteps([])}>
          {steps.length > 0 ? "Сховати" : "Спростити"}
        </Button>
        {steps.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant='h4' gutterBottom align='center'>
              Покрокове спрощення:
            </Typography>
            {steps.map((step, index) => (
              <Typography key={index} variant='body1' sx={{ mt: 1 }}>
                {index + 1}. {step}
              </Typography>
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  )
}

export default Laba3
