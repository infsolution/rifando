// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient} from '@supabase/supabase-js'
import { deflate } from 'zlib';

const supabase = createClient(
  'https://rmwauxdwiuwsoriosegi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd2F1eGR3aXV3c29yaW9zZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNTc0NzEsImV4cCI6MTk3MzYzMzQ3MX0.Kd-OhbTB4t7MlcyOu2MaFGo6TXS4QLu72PX5BGI9Dnc'
);

export default supabase