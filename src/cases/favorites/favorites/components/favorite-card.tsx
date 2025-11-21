

export type Favorite = {
  id: string;
  name: string;
};

interface FavoriteCardProps {
  favorite: Favorite;
  onRemove?: (id: string) => void;
}

export default function FavoriteCard({ favorite, onRemove }: FavoriteCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg shadow-sm">

      <div className="flex-1">
        <h3 className="font-semibold">{favorite.name}</h3>
      </div>

      {onRemove && (
        <button
          onClick={() => onRemove(favorite.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remover
        </button>
      )}
    </div>
  );
}
