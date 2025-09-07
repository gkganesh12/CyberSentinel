export const mockAlerts = [
  {
    id: 'ALT-001',
    timestamp: '2024-01-15 14:23:45',
    severity: 'High',
    description: 'Suspicious phishing email detected targeting finance department',
    source: 'Email Security',
    status: 'New'
  },
  {
    id: 'ALT-002',
    timestamp: '2024-01-15 14:21:30',
    severity: 'Medium',
    description: 'Multiple failed login attempts from external IP address',
    source: 'Network Security',
    status: 'Investigating'
  },
  {
    id: 'ALT-003',
    timestamp: '2024-01-15 14:19:15',
    severity: 'Low',
    description: 'Unusual network traffic pattern detected on subnet 192.168.1.0/24',
    source: 'Network Monitor',
    status: 'Resolved'
  },
  {
    id: 'ALT-004',
    timestamp: '2024-01-15 14:17:22',
    severity: 'High',
    description: 'Malware signature match found in downloaded file',
    source: 'Endpoint Protection',
    status: 'New'
  },
  {
    id: 'ALT-005',
    timestamp: '2024-01-15 14:15:08',
    severity: 'Medium',
    description: 'Unauthorized access attempt to admin panel',
    source: 'Web Application Firewall',
    status: 'Investigating'
  },
  {
    id: 'ALT-006',
    timestamp: '2024-01-15 14:12:45',
    severity: 'Low',
    description: 'Certificate expiration warning for internal services',
    source: 'Certificate Manager',
    status: 'Resolved'
  },
  {
    id: 'ALT-007',
    timestamp: '2024-01-15 14:10:33',
    severity: 'High',
    description: 'Potential data exfiltration attempt detected',
    source: 'Data Loss Prevention',
    status: 'New'
  },
  {
    id: 'ALT-008',
    timestamp: '2024-01-15 14:08:19',
    severity: 'Medium',
    description: 'Suspicious PowerShell execution detected on workstation',
    source: 'Endpoint Detection',
    status: 'Investigating'
  }
];

export const mockIncidents = [
  {
    id: 'INC-001',
    title: 'Advanced Persistent Threat Campaign',
    severity: 'High',
    status: 'Investigating',
    timestamp: '2024-01-15 13:45:22',
    description: 'Multi-stage attack campaign targeting intellectual property',
    source: 'Threat Intelligence',
    assignee: 'Security Analyst Team'
  },
  {
    id: 'INC-002',
    title: 'Ransomware Detection',
    severity: 'Critical',
    status: 'Contained',
    timestamp: '2024-01-15 12:30:15',
    description: 'Ransomware activity detected on file server',
    source: 'Endpoint Protection',
    assignee: 'Incident Response Team'
  }
];