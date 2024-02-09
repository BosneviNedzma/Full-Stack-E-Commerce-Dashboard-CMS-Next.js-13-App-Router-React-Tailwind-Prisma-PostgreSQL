import { format, addDays, addHours, nextSaturday } from 'date-fns';

import { Archive, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2 } from 'lucide-react';

import { Mail } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Arhiva</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Arhiva</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                {/* <ArchiveX className="h-4 w-4" /> */}
                <span className="sr-only">Pomakni u smeće</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Pomakni u smeće</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Premjesti u kantu</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Premjesti u kantu</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!mail}>
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Odgodi</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Odgodi do</div>
                  <div className="grid min-w-[250px] gap-1">
                    <Button variant="ghost" className="justify-start font-normal">
                    Kasnije danas{' '}
                      <span className="ml-auto text-muted-foreground">{format(addHours(today, 4), 'E, h:m b')}</span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      Sutra
                      <span className="ml-auto text-muted-foreground">{format(addDays(today, 1), 'E, h:m b')}</span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      Ovog vikenda
                      <span className="ml-auto text-muted-foreground">{format(nextSaturday(today), 'E, h:m b')}</span>
                    </Button>
                    <Button variant="ghost" className="justify-start font-normal">
                      Naredne sedmice
                      <span className="ml-auto text-muted-foreground">{format(addDays(today, 7), 'E, h:m b')}</span>
                    </Button>
                  </div>
                </div>
                <div className="p-2">
                  <Calendar />
                </div>
              </PopoverContent>
            </Popover>
            <TooltipContent>Odgodi</TooltipContent>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <Reply className="h-4 w-4" />
                <span className="sr-only">Odgovori</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Odgovori</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <ReplyAll className="h-4 w-4" />
                <span className="sr-only">Odgovori svima</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Odgovori svima</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <Forward className="h-4 w-4" />
                <span className="sr-only">Proslijedi</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Proslijedi</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!mail}>
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Više</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Označi kao nepročitano</DropdownMenuItem>
            <DropdownMenuItem>Omiljeno</DropdownMenuItem>
            <DropdownMenuItem>Dodaj oznaku</DropdownMenuItem>
            <DropdownMenuItem>Isključi razgovor</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(' ')
                    .map((chunk) => chunk[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Odgovori:</span> {mail.email}
                </div>
              </div>
            </div>
            {mail.date && (
              <div className="ml-auto text-xs text-muted-foreground">{format(new Date(mail.date), 'PPpp')}</div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">{mail.text}</div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <textarea className="p-4" placeholder={`Odgovori ${mail.name}...`} />
                <div className="flex items-center">
                  <Label htmlFor="mute" className="flex items-center gap-2 text-xs font-normal">
                    <Switch id="mute" aria-label="Mute thread" /> Isključi ovu obavijest
                  </Label>
                  <Button onClick={(e) => e.preventDefault()} size="sm" className="ml-auto">
                    Pošalji
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">Nema odabrane poruke</div>
      )}
    </div>
  );
}
