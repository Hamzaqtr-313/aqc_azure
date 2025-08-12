import React from 'react';
import './AzureServices.css';

const azureServices = [
  {
    name: 'Azure App Service',
    description: 'Host web apps, RESTful APIs, and mobile back ends in Azure.',
    link: 'https://azure.microsoft.com/en-us/products/app-service/'
  },
  {
    name: 'Azure Functions',
    description: 'Event-driven serverless compute platform for rapid development.',
    link: 'https://azure.microsoft.com/en-us/products/functions/'
  },
  {
    name: 'Azure Storage',
    description: 'Durable, scalable cloud storage for data, files, and objects.',
    link: 'https://azure.microsoft.com/en-us/products/storage/'
  },
  {
    name: 'Azure SQL Database',
    description: 'Managed relational SQL database as a service.',
    link: 'https://azure.microsoft.com/en-us/products/azure-sql/'
  },
  {
    name: 'Azure Virtual Machines',
    description: 'Provision Windows and Linux VMs in seconds.',
    link: 'https://azure.microsoft.com/en-us/products/virtual-machines/'
  }
];

function AzureServices() {
  return (
    <div className="azure-services-container">
      <h1>Azure Services</h1>
      <p>Explore popular Azure cloud services below:</p>
      <div className="services-list">
        {azureServices.map(service => (
          <div className="service-card" key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <a href={service.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AzureServices;
