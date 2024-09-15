// Chart.js Configuration
const ctx1 = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Spending Overview',
      data: [5000, 7000, 4000, 6000, 3000, 5500],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  }
});

const ctx2 = document.getElementById('projectChart').getContext('2d');
const projectChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [{
      data: [5, 3, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  }
});


// Adding Animation Effects
document.querySelectorAll('.overview-card, .chart-container, .recent-activity, .project-card').forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(20px)';

  window.addEventListener('scroll', () => {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementPosition < viewportHeight) {
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
  const postJobButton = document.getElementById('postJobButton');
  const modal = document.getElementById('postJobModal');
  const closeModal = document.querySelector('.modal .close');

  // Open the modal
  postJobButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close the modal when clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

