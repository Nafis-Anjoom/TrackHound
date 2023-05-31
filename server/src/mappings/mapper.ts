import { createMap, createMapper, typeConverter } from '@automapper/core';
import { classes } from '@automapper/classes';
import { ObjectId } from 'mongodb';
import TrackPartial from '../entities/trackPartial.entity';
import CommentDTO from '../dto/comment.dto';
import SubmissionDTO from '../dto/submission.dto';
import SubmissionPartialDTO from '../dto/submissionPartial.dto';
import TrackDTO from '../dto/track.dto';
import TrackPartialDTO from '../dto/trackPartial.dto';
import UserDTO from '../dto/user.dto';
import Comment from '../entities/comment.entity';
import Submission from '../entities/submission.entity';
import SubmissionPartial from '../entities/submissionPartial.entity';
import Track from '../entities/track.entity';
import User from '../entities/user.entity';
import UserPartial from '../entities/userPartial.entity';
import UserPartialDTO from '../dto/userPartial.dto';

// Create and export the mapper
export const mapper = createMapper({
    strategyInitializer: classes(),
});

export function intializeMappings() {
    // Entity -> DTO
    createMap(mapper, UserPartial, UserPartialDTO);
    createMap(mapper, SubmissionPartial, SubmissionPartialDTO);
    createMap(mapper, Submission, SubmissionDTO, 
        typeConverter(ObjectId, String, (objectId) => objectId.toString())
    );
    createMap(mapper, TrackPartial, TrackPartialDTO,
        typeConverter(ObjectId, String, (objectId) => objectId.toString())
    );
    createMap(mapper, Track, TrackDTO,
        typeConverter(ObjectId, String, (objectId) => objectId.toString())    
    );
    createMap(mapper, User, UserDTO,
        typeConverter(ObjectId, String, (objectId) => objectId.toString())
    );
    createMap(mapper, Comment, CommentDTO,
        typeConverter(ObjectId, String, (objectId) => objectId.toString())
    );

    // DTO -> Entity
    createMap(mapper, UserPartialDTO, UserPartial);
    createMap(mapper, SubmissionPartialDTO, SubmissionPartial);
    createMap(mapper, SubmissionDTO, Submission,
        typeConverter(String, ObjectId, (str) => new ObjectId(str))
    );
    createMap(mapper, TrackPartialDTO, TrackPartial,
        typeConverter(String, ObjectId, (str) => new ObjectId(str))
    );
    createMap(mapper, TrackDTO, Track,
        typeConverter(String, ObjectId, (str) => new ObjectId(str))    
    );
    createMap(mapper, UserDTO, User,
        typeConverter(String, ObjectId, (str) => new ObjectId(str))
    );
    createMap(mapper, CommentDTO, Comment,
        typeConverter(String, ObjectId, (str) => new ObjectId(str))
    );
}