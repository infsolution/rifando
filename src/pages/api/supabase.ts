// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient} from '@supabase/supabase-js'
import { deflate } from 'zlib';

const supabase = createClient(
  'https://vuzjlzswyikppzuebuti.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1empsenN3eWlrcHB6dWVidXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQzNTAxODMsImV4cCI6MTk2OTkyNjE4M30.cC0DBU6TdEf8ahYGG1N6uJHx1-45TLQbRrAv-fgVVf8'
);

export default supabase