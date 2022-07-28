export const  setHeder=(query: string)=>{
    return {
        url:`https://rmwauxdwiuwsoriosegi.supabase.co/rest/v1/raffles?${query}`,
        options:{
            headers:{
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd2F1eGR3aXV3c29yaW9zZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNTc0NzEsImV4cCI6MTk3MzYzMzQ3MX0.Kd-OhbTB4t7MlcyOu2MaFGo6TXS4QLu72PX5BGI9Dnc',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd2F1eGR3aXV3c29yaW9zZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNTc0NzEsImV4cCI6MTk3MzYzMzQ3MX0.Kd-OhbTB4t7MlcyOu2MaFGo6TXS4QLu72PX5BGI9Dnc`,
            "Range": "0-9"
        },
        method: 'GET'
        }
    }
}