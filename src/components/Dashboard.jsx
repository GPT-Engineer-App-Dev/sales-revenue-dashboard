import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Business Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Stat>
          <StatLabel>Sales</StatLabel>
          <StatNumber>$89,400</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$212,920</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.12%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
      <Flex justifyContent="center" mt={10}>
        <Doughnut data={data} />
      </Flex>
    </Box>
  );
};

export default Dashboard;