import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

interface LoadingCardProps {
  variant?: 'default' | 'compact' | 'featured';
  count?: number;
}

export default function LoadingCard({ variant = 'default', count = 1 }: LoadingCardProps) {
  const getSkeletonCard = () => {
    switch (variant) {
      case 'compact':
        return (
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Skeleton className="w-16 h-20 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-3 w-1/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'featured':
        return (
          <Card>
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/4" />
            </CardContent>
          </Card>
        );

      default:
        return (
          <Card>
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{getSkeletonCard()}</div>
      ))}
    </>
  );
}
